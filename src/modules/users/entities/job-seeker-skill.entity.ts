import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { JobSeeker } from './job-seeker.entity';
import { Skill } from '../../shared/entities/skill.entity';

@Entity('job_seeker_skills')
export class JobSeekerSkill {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => JobSeeker, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'candidate_id' })
  @ApiProperty({ type: () => JobSeeker })
  candidate: JobSeeker | number;

  @ManyToOne(() => Skill, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'skill_id' })
  @ApiProperty({ type: () => Skill })
  skill: Skill | number;

  @Column()
  @ApiProperty({ example: 'Expert' })
  proficiency: string;

  @Column({ name: 'years_of_experience' })
  @ApiProperty({ example: 3 })
  yearsOfExperience: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
