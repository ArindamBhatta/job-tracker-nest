import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsEmail, IsDateString } from 'class-validator';

export class CreateJobSeekerDto {
  @ApiProperty({ example: 'seeker@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'https://example.com/resume.pdf' })
  @IsString()
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

  @ApiProperty({ example: '2025-01-01', required: false })
  @IsDateString()
  @IsOptional()
  resignationDate?: Date;
}
