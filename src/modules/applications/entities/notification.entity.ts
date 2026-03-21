import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity('notification')
export class Notification {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({ type: () => User })
  user: User | number;

  @Column({ name: 'notification_type' })
  @ApiProperty({ example: 'Application Update' })
  notificationType: string;

  @Column({ name: 'notification_message' })
  @ApiProperty({ example: 'Your application status has changed.' })
  notificationMessage: string;

  @Column({ name: 'notification_date' })
  @ApiProperty({ example: '2025-03-22' })
  notificationDate: Date;

  @Column({ name: 'is_read' })
  @ApiProperty({ example: false })
  isRead: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
