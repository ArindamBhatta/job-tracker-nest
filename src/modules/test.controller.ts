import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AtGuard } from './auth/guards/access_token.guard';

@ApiTags('test')
@Controller('test')
export class TestController {
  @UseGuards(AtGuard)
  @Get('protected')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'A protected test route' })
  getProtectedData() {
    return { message: 'You have accessed protected data!' };
  }
}
