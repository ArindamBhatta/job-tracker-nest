import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('designation')
export class Designation {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ name: 'designation_name' })
  @ApiProperty({ example: 'Software Engineer' })
  designationName: string;

  @Column()
  @ApiProperty({ example: 'Engineering' })
  department: string;

  @Column({ name: 'job_level' })
  @ApiProperty({ example: 'Mid-Level' })
  jobLevel: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
