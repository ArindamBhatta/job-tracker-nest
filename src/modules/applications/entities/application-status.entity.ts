import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { JobApplication } from './job-application.entity';
import { StatusType } from '../../shared/entities/status-type.entity';
import { User } from '../../users/entities/user.entity';

@Entity('application_status')
export class ApplicationStatus {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => JobApplication, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'application_id' })
  @ApiProperty({ type: () => JobApplication })
  application: JobApplication | number;

  @ManyToOne(() => StatusType, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'status_type_id' })
  @ApiProperty({ type: () => StatusType })
  statusType: StatusType | number;

  @Column({ name: 'status_date' })
  @ApiProperty({ example: '2025-03-22' })
  statusDate: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'updated_by' })
  @ApiProperty({ type: () => User })
  updatedBy: User | number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
