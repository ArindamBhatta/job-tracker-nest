import { ApiProperty } from '@nestjs/swagger';
import { AuthUserResponseDto } from './auth-user-response.dto';
import { TokenResponseDto } from './token-response.dto';

export class AuthResponseDto {
  @ApiProperty({ type: () => AuthUserResponseDto })
  user: AuthUserResponseDto;

  @ApiProperty({ type: () => TokenResponseDto })
  tokens: TokenResponseDto;
}