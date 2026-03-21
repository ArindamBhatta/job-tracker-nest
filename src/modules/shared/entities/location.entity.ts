import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('location')
export class Location {
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

  @Column()
  @ApiProperty({ example: 94105 })
  pincode: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
