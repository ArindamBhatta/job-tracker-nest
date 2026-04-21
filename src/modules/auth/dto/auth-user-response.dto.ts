import { ApiProperty } from '@nestjs/swagger';
import { UserPersona } from '../../users/enums/user-persona.enum';

export class AuthUserResponseDto {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ enum: UserPersona, example: UserPersona.JOB_SEEKER })
  persona: UserPersona;

  @ApiProperty({ example: 'John Doe' })
  fullName: string;

  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: '1234567890' })
  phone: string;

  @ApiProperty({ example: '123 Main St' })
  address: string;

  @ApiProperty({ example: '1990-01-01', nullable: true })
  dateOfBirth: string | null;

  @ApiProperty({ example: '1234-5678-9012', nullable: true })
  aadhaarNumber: string | null;

  @ApiProperty({ example: 101, nullable: true })
  pincode: number | null;
}