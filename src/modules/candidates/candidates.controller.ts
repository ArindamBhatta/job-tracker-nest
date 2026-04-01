import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { AtGuard } from '../auth/guards/access_token.guard';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@ApiTags('candidates')
@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new candidate profile' })
  @ApiResponse({ status: 201, description: 'Candidate profile successfully created' })
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidatesService.create(createCandidateDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all candidate profiles' })
  @ApiResponse({ status: 200, description: 'Return all candidates' })
  findAll() {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a candidate profile by ID' })
  @ApiParam({ name: 'id', description: 'Candidate ID' })
  @ApiResponse({ status: 200, description: 'Return single candidate' })
  @ApiResponse({ status: 404, description: 'Candidate not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.candidatesService.findOne(id);
  }

  @UseGuards(AtGuard)
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update a candidate profile' })
  @ApiParam({ name: 'id', description: 'Candidate ID' })
  @ApiResponse({ status: 200, description: 'Candidate profile successfully updated' })
  @ApiResponse({ status: 404, description: 'Candidate not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCandidateDto: UpdateCandidateDto,
    @Req() req: any,
  ) {
    const userId = req.user['sub'];
    return this.candidatesService.update(id, updateCandidateDto, userId);
  }

  @UseGuards(AtGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a candidate profile' })
  @ApiParam({ name: 'id', description: 'Candidate ID' })
  @ApiResponse({ status: 204, description: 'Candidate profile successfully deleted' })
  @ApiResponse({ status: 404, description: 'Candidate not found' })
  remove(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    const userId = req.user['sub'];
    return this.candidatesService.remove(id, userId);
  }
}
