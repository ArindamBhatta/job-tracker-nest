import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Interview } from './interview.entity';

@Entity('interview_feedback')
export class InterviewFeedback {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @OneToOne(() => Interview, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'interview_id' })
  @ApiProperty({ type: () => Interview })
  interview: Interview | number;

  @Column()
  @ApiProperty({ example: 4 })
  rating: number;

  @Column({ name: 'technical_skills' })
  @ApiProperty({ example: 'Strong' })
  technicalSkills: string;

  @Column({ name: 'communication_skills' })
  communicationSkills: string;

  @Column({ name: 'problem_solving_skills' })
  problemSolvingSkills: string;

  @Column({ name: 'teamwork_skills' })
  teamworkSkills: string;

  @Column({ name: 'leadership_skills' })
  leadershipSkills: string;

  @Column({ name: 'adaptability_skills' })
  adaptabilitySkills: string;

  @Column({ name: 'time_management_skills' })
  timeManagementSkills: string;

  @Column({ name: 'stress_management_skills' })
  stressManagementSkills: string;

  @Column({ name: 'work_ethic_skills' })
  workEthicSkills: string;

  @Column()
  @ApiProperty({ example: 'Recommended' })
  recommendation: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
