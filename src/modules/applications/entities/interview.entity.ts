import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { JobApplication } from './job-application.entity';
import { Interviewer } from '../../companies/entities/interviewer.entity';
import { User } from '../../users/entities/user.entity';

@Entity('interview')
export class Interview {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => JobApplication, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'application_id' })
  @ApiProperty({ type: () => JobApplication })
  application: JobApplication | number;

  @Column({ name: 'interview_date' })
  @ApiProperty({ example: '2025-03-25' })
  interviewDate: Date;

  @Column({ name: 'interview_time' })
  @ApiProperty({ example: '2025-03-25T10:00:00Z' })
  interviewTime: Date;

  @Column({ name: 'interview_type' })
  @ApiProperty({ example: 'Technical' })
  interviewType: string;

  @Column({ name: 'interview_mode' })
  @ApiProperty({ example: 'Online' })
  interviewMode: string;

  @Column({ name: 'interview_name' })
  @ApiProperty({ example: 'Round 1: Algorithms' })
  interviewName: string;

  @ManyToOne(() => Interviewer, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'interviewer_id' })
  @ApiProperty({ type: () => Interviewer })
  interviewer: Interviewer | number;

  @Column({ name: 'interview_status' })
  @ApiProperty({ example: 'Scheduled' })
  interviewStatus: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'updated_by' })
  @ApiProperty({ type: () => User })
  updatedBy: User | number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
