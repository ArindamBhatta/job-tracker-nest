import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('job_seeker')
export class JobSeeker {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ type: () => User })
  user: User;

  @Column()
  @ApiProperty({ example: 'seeker@example.com' })
  email: string;

  @Column({ name: 'resume_url' })
  @ApiProperty({ example: 'https://example.com/resume.pdf' })
  resumeUrl: string;

  @Column({ name: 'education_level' })
  @ApiProperty({ example: 'Bachelor' })
  educationLevel: string;

  @Column({ name: 'pass_out_year' })
  @ApiProperty({ example: 2022 })
  passOutYear: number;

  @Column()
  @ApiProperty({ example: 'Computer Science' })
  stream: string;

  @Column({ name: 'work_experience_years' })
  @ApiProperty({ example: 2 })
  workExperienceYears: number;

  @Column({ name: 'current_work_stream' })
  @ApiProperty({ example: 'Software Development' })
  currentWorkStream: string;

  @Column({ name: 'expected_salary' })
  @ApiProperty({ example: 80000 })
  expectedSalary: number;

  @Column({ name: 'availability_status' })
  @ApiProperty({ example: 'Immediately Available' })
  availabilityStatus: string;

  @Column({ name: 'resignation_date', nullable: true })
  @ApiProperty({ example: '2025-01-01', nullable: true })
  resignationDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
