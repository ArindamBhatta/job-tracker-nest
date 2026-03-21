import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { JobSeeker } from '../../users/entities/job-seeker.entity';
import { Job } from './job.entity';

@Entity('saved_jobs')
export class SavedJob {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => JobSeeker, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'candidate_id' })
  @ApiProperty({ type: () => JobSeeker })
  candidate: JobSeeker | number;

  @ManyToOne(() => Job, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  @ApiProperty({ type: () => Job })
  job: Job | number;

  @Column({ name: 'saved_date' })
  @ApiProperty({ example: '2025-03-01' })
  savedDate: Date;

  @Column({ type: 'text' })
  @ApiProperty({ example: 'Highly interested in this role' })
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
