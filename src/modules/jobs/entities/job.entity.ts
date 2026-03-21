import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Company } from '../../companies/entities/company.entity';
import { Designation } from '../../companies/entities/designation.entity';
import { Location } from '../../shared/entities/location.entity';

@Entity('job')
export class Job {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => Company, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'company_id' })
  @ApiProperty({ type: () => Company })
  company: Company | number;

  @ManyToOne(() => Designation, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'designation_id' })
  @ApiProperty({ type: () => Designation })
  designation: Designation | number;

  @ManyToOne(() => Location, { nullable: true })
  @JoinColumn({ name: 'job_location' })
  @ApiProperty({ type: () => Location, nullable: true })
  jobLocation: Location | number;

  @Column({ name: 'min_experience' })
  @ApiProperty({ example: 2 })
  minExperience: number;

  @Column({ name: 'max_experience' })
  @ApiProperty({ example: 5 })
  maxExperience: number;

  @Column({ name: 'opening_count' })
  @ApiProperty({ example: 3 })
  openingCount: number;

  @Column({ name: 'job_title' })
  @ApiProperty({ example: 'Senior React Developer' })
  jobTitle: string;

  @Column({ name: 'job_description', type: 'text' })
  @ApiProperty({ example: 'We are looking for a React developer...' })
  jobDescription: string;

  @Column({ name: 'job_salary' })
  @ApiProperty({ example: 100000 })
  jobSalary: number;

  @Column({ name: 'job_type' })
  @ApiProperty({ example: 'Full-time' })
  jobType: string;

  @Column({ name: 'job_status' })
  @ApiProperty({ example: 'Active' })
  jobStatus: string;

  @Column({ name: 'job_start_date' })
  @ApiProperty({ example: '2025-04-01' })
  jobStartDate: Date;

  @Column({ name: 'job_end_date' })
  @ApiProperty({ example: '2025-05-01' })
  jobEndDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
