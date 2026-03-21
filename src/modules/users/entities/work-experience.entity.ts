import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { JobSeeker } from './job-seeker.entity';
import { Company } from '../../companies/entities/company.entity';
import { Designation } from '../../companies/entities/designation.entity';

@Entity('work_experience')
export class WorkExperience {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => JobSeeker, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_seeker_id' })
  @ApiProperty({ type: () => JobSeeker })
  jobSeeker: JobSeeker | number;

  @ManyToOne(() => Company, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'company_id' })
  @ApiProperty({ type: () => Company, nullable: true })
  company: Company | number;

  @Column({ name: 'company_name', nullable: true })
  @ApiProperty({ example: 'Google', nullable: true })
  companyName: string;

  @ManyToOne(() => Designation, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'designation_id' })
  @ApiProperty({ type: () => Designation, nullable: true })
  designation: Designation | number;

  @Column({ name: 'designation_name', nullable: true })
  @ApiProperty({ example: 'Software Engineer', nullable: true })
  designationName: string;

  @Column({ name: 'work_experience_description' })
  @ApiProperty({ example: 'Developed web applications' })
  workExperienceDescription: string;

  @Column({ name: 'work_experience_start_date' })
  @ApiProperty({ example: '2022-07-01' })
  workExperienceStartDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
