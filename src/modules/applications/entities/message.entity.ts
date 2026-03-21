import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity('message')
export class Message {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sender_id' })
  @ApiProperty({ type: () => User })
  sender: User | number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'receiver_id' })
  @ApiProperty({ type: () => User })
  receiver: User | number;

  @Column({ name: 'message_content', type: 'text' })
  @ApiProperty({ example: 'Hello, I have a question about the role.' })
  messageContent: string;

  @Column({ name: 'message_date' })
  @ApiProperty({ example: '2025-03-22' })
  messageDate: Date;

  @Column({ name: 'is_read', default: false })
  @ApiProperty({ example: false })
  isRead: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
