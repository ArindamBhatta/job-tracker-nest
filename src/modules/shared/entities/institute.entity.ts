import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { University } from './university.entity';

@Entity('institute')
export class Institute {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ name: 'institute_name' })
  @ApiProperty({ example: 'Stanford School of Engineering' })
  instituteName: string;

  @ManyToOne(() => University, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'university_id' })
  @ApiProperty({ type: () => University })
  university: University | number;

  @Column({ name: 'institute_address' })
  @ApiProperty({ example: '450 Serra Mall, Stanford, CA' })
  instituteAddress: string;

  @Column({ name: 'establishment_date' })
  @ApiProperty({ example: '1891-10-01' })
  establishmentDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
