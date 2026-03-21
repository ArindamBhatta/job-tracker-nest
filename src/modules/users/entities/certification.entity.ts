import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('certifications')
export class Certification {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ type: () => User })
  user: User | number;

  @Column({ name: 'candidate_name' })
  @ApiProperty({ example: 'John Doe' })
  candidateName: string;

  @Column({ name: 'issue_date' })
  @ApiProperty({ example: '2023-01-01' })
  issueDate: Date;

  @Column({ name: 'issuing_authority' })
  @ApiProperty({ example: 'AWS' })
  issuingAuthority: string;

  @Column({ name: 'certificate_url' })
  @ApiProperty({ example: 'https://example.com/cert.pdf' })
  certificateUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
