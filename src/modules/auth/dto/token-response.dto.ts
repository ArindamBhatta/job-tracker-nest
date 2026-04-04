import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDto {
  @ApiProperty({ example: 'eyJhbGciOi...' })
  access_token: string;

    @ApiProperty({ example: 'eyJhbGciOi...' })
  refresh_token: string;
}