import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { JobBenefit } from './entities/job-benefit.entity';
import { JobRequirerSkill } from './entities/job-requirer-skill.entity';
import { SavedJob } from './entities/saved-job.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Job,
      JobBenefit,
      JobRequirerSkill,
      SavedJob,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class JobsModule {}
