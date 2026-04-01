import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 'seeker@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'https://example.com/resume.pdf' })
  @IsUrl()
  @IsNotEmpty()
  resumeUrl: string;

  @ApiProperty({ example: 'Bachelor' })
  @IsString()
  @IsNotEmpty()
  educationLevel: string;

  @ApiProperty({ example: 2022 })
  @IsNumber()
  @IsNotEmpty()
  passOutYear: number;

  @ApiProperty({ example: 'Computer Science' })
  @IsString()
  @IsNotEmpty()
  stream: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsNotEmpty()
  workExperienceYears: number;

  @ApiProperty({ example: 'Software Development' })
  @IsString()
  @IsNotEmpty()
  currentWorkStream: string;

  @ApiProperty({ example: 80000 })
  @IsNumber()
  @IsNotEmpty()
  expectedSalary: number;

  @ApiProperty({ example: 'Immediately Available' })
  @IsString()
  @IsNotEmpty()
  availabilityStatus: string;

  @ApiPropertyOptional({ example: '2025-01-01' })
  @IsOptional()
  resignationDate?: Date;
}
