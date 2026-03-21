import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Location } from '../../shared/entities/location.entity';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ name: 'company_name' })
  @ApiProperty({ example: 'Google' })
  companyName: string;

  @Column({ name: 'company_email' })
  @ApiProperty({ example: 'hr@google.com' })
  companyEmail: string;

  @Column({ name: 'company_phone' })
  @ApiProperty({ example: '1234567890' })
  companyPhone: string;

  @Column({ name: 'company_website' })
  @ApiProperty({ example: 'https://google.com' })
  companyWebsite: string;

  @Column({ name: 'company_logo_url' })
  @ApiProperty({ example: 'https://example.com/logo.png' })
  companyLogoUrl: string;

  @Column({ name: 'industry_type' })
  @ApiProperty({ example: 'Technology' })
  industryType: string;

  @Column({ name: 'company_size' })
  @ApiProperty({ example: '10000+' })
  companySize: string;

  @Column({ name: 'establish_year' })
  @ApiProperty({ example: 1998 })
  establishYear: number;

  @ManyToOne(() => Location, { nullable: true })
  @JoinColumn({ name: 'location' })
  @ApiProperty({ type: () => Location, nullable: true })
  location: Location | number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
