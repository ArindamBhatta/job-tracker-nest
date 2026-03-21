import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'TypeScript' })
  skillName: string;

  @Column()
  @ApiProperty({ example: 'Programming' })
  skillCategory: string;

  @Column()
  @ApiProperty({ example: 'Proficient in TypeScript development' })
  skillDescription: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
