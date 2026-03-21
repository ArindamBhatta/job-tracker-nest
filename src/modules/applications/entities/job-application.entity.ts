import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Job } from '../../jobs/entities/job.entity';
import { User } from '../../users/entities/user.entity';

@Entity('job_application')
export class JobApplication {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => Job, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  @ApiProperty({ type: () => Job })
  job: Job | number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ type: () => User })
  user: User | number;

  @Column({ name: 'application_date' })
  @ApiProperty({ example: '2025-03-22' })
  applicationDate: Date;

  @Column({ name: 'cover_letter', type: 'text' })
  @ApiProperty({ example: 'I am excited to apply for this position...' })
  coverLetter: string;

  @Column({ name: 'application_status' })
  @ApiProperty({ example: 'Applied' })
  applicationStatus: string;

  @Column({ name: 'applied_salary' })
  @ApiProperty({ example: 95000 })
  appliedSalary: number;

  @Column()
  @ApiProperty({ example: 'LinkedIn' })
  source: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
