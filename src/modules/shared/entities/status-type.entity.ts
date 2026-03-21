import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('status_type')
export class StatusType {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'Applied' })
  statusName: string;

  @Column()
  @ApiProperty({ example: 'The candidate has applied for the job' })
  statusDescription: string;

  @Column()
  @ApiProperty({ example: 1 })
  statusOrder: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
