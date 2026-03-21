import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Job } from './job.entity';
import { Skill } from '../../shared/entities/skill.entity';

@Entity('job_requirer_skills')
export class JobRequirerSkill {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => Job, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  @ApiProperty({ type: () => Job })
  job: Job | number;

  @ManyToOne(() => Skill, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'skill_id' })
  @ApiProperty({ type: () => Skill })
  skill: Skill | number;

  @Column({ name: 'is_mandatory' })
  @ApiProperty({ example: true })
  isMandatory: boolean;

  @Column({ name: 'minimum_experience' })
  @ApiProperty({ example: 2 })
  minimumExperience: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
