import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('pincode')
export class Pincode {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'San Francisco' })
  city: string;

  @Column()
  @ApiProperty({ example: 'California' })
  state: string;

  @Column()
  @ApiProperty({ example: 'USA' })
  country: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'Downtown', nullable: true })
  areaName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
