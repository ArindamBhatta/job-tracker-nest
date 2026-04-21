import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Pincode } from '../../shared/entities/pincode.entity';
import { UserPersona } from '../enums/user-persona.enum';

@Entity('users')
export class User {
  //primary key
  @PrimaryGeneratedColumn({ name: 'user_id' })
  @ApiProperty({ example: 1 })
  userId: number;

  @Column({ name: 'full_name' })
  @ApiProperty({ example: 'John Doe' })
  fullName: string;

  //Normal DB field
  @Column({ unique: true })
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @Column()
  @ApiProperty({ example: 'hashed_password' })
  password: string;

  @Column()
  @ApiProperty({ example: '1234567890' })
  phone: string;

  @Column({
    type: 'enum',
    enum: UserPersona,
    default: UserPersona.JOB_SEEKER,
  })
  @ApiProperty({ enum: UserPersona, example: UserPersona.JOB_SEEKER })
  persona: UserPersona;

  @Column({ name: 'date_of_birth', nullable: true })
  @ApiProperty({ example: '1990-01-01', nullable: true })
  dateOfBirth: string;

  @Column({ name: 'aadhaar_number', unique: true, nullable: true })
  @ApiProperty({ example: '1234-5678-9012', nullable: true })
  aadhaarNumber: string;

  @Column()
  @ApiProperty({ example: '123 Main St' })
  address: string;
//many User rows can reference one Pincode row
  @ManyToOne(() => Pincode, { nullable: true })
  @JoinColumn({ name: 'pincode' })
  @ApiProperty({ type: () => Pincode, nullable: true })
  pincode: Pincode | number;

  @Column({ name: 'refresh_token', type: 'text', nullable: true })
  @ApiProperty({ example: 'token', nullable: true })
  refreshToken: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
