import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { JobSeeker } from '../users/entities/job-seeker.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobSeeker, User])],
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}
