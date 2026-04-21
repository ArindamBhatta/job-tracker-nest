import { Controller, Post, Get, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateJobSeekerDto } from './dto/create-job-seeker.dto';
import { AtGuard } from '../auth/guards/access_token.guard';
import { JobSeekerService } from './job-seeker.service';

@ApiTags('job-seekers')
@Controller('job-seekers')
export class JobSeekerController {
  constructor(private jobSeekerService: JobSeekerService) { }

  @UseGuards(AtGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a job seeker profile for the current user' })
  @ApiResponse({ status: 201, description: 'Job seeker profile created successfully' })
  createJobSeeker(@Req() req: any, @Body() dto: CreateJobSeekerDto) {
    const userId = req.user.sub;
    return this.jobSeekerService.createJobSeeker(userId, dto);
  }

  @UseGuards(AtGuard)
  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user job seeker profile' })
  @ApiResponse({ status: 200, description: 'Returns the job seeker profile' })
  getJobSeekerMe(@Req() req: any) {
    const userId = req.user.sub;
    return this.jobSeekerService.getJobSeekerByUserId(userId);
  }
}
