import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Company } from './company.entity';
import { Designation } from './designation.entity';

@Entity('interviewer')
export class Interviewer {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ name: 'interviewer_name' })
  @ApiProperty({ example: 'Alice Smith' })
  interviewerName: string;

  @Column({ name: 'interviewer_email' })
  @ApiProperty({ example: 'alice@google.com' })
  interviewerEmail: string;

  @Column({ name: 'interviewer_phone' })
  @ApiProperty({ example: '0987654321' })
  interviewerPhone: string;

  @ManyToOne(() => Company, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'company_id' })
  @ApiProperty({ type: () => Company })
  company: Company | number;

  @ManyToOne(() => Designation, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'designation_id' })
  @ApiProperty({ type: () => Designation })
  designation: Designation | number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
