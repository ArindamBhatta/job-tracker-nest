import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { JobSeeker } from './job-seeker.entity';
import { Institute } from '../../shared/entities/institute.entity';

@Entity('education')
export class Education {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => JobSeeker, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'candidate_id' })
  @ApiProperty({ type: () => JobSeeker })
  candidate: JobSeeker | number;

  @Column({ name: 'degree_name' })
  @ApiProperty({ example: 'B.Sc. Computer Science' })
  degreeName: string;

  @Column({ name: 'degree_description' })
  @ApiProperty({ example: 'Four-year degree program' })
  degreeDescription: string;

  @Column({ name: 'degree_start_date' })
  @ApiProperty({ example: '2018-09-01' })
  degreeStartDate: Date;

  @Column({ name: 'degree_end_date' })
  @ApiProperty({ example: '2022-06-01' })
  degreeEndDate: Date;

  @Column({ name: 'percentage_cgpa' })
  @ApiProperty({ example: '3.8/4.0' })
  percentageCgpa: string;

  @Column()
  @ApiProperty({ example: 'Software Engineering' })
  specialization: string;

  @ManyToOne(() => Institute, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'institute_id' })
  @ApiProperty({ type: () => Institute })
  institute: Institute | number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
