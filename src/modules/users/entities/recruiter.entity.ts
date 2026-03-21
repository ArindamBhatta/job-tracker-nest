import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { Company } from '../../companies/entities/company.entity';
import { Designation } from '../../companies/entities/designation.entity';

@Entity('recruiter')
export class Recruiter {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ type: () => User })
  user: User | number;

  @ManyToOne(() => Company, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'company_id' })
  @ApiProperty({ type: () => Company })
  company: Company | number;

  @ManyToOne(() => Designation, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'designation_id' })
  @ApiProperty({ type: () => Designation })
  designation: Designation | number;

  @Column({ name: 'hire_date' })
  @ApiProperty({ example: '2021-01-01' })
  hireDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
