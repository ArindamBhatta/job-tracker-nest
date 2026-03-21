import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Job } from './job.entity';

@Entity('job_benefits')
export class JobBenefit {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => Job, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  @ApiProperty({ type: () => Job })
  job: Job | number;

  @Column({ name: 'benefit_description', type: 'text' })
  @ApiProperty({ example: 'Health insurance and dental care' })
  benefitDescription: string;

  @Column({ name: 'benefit_type' })
  @ApiProperty({ example: 'Health' })
  benefitType: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
