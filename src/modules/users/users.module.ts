import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JobSeeker } from './entities/job-seeker.entity';
import { Employee } from './entities/employee.entity';
import { Recruiter } from './entities/recruiter.entity';
import { Certification } from './entities/certification.entity';
import { Education } from './entities/education.entity';
import { WorkExperience } from './entities/work-experience.entity';
import { JobSeekerSkill } from './entities/job-seeker-skill.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      JobSeeker,
      Employee,
      Recruiter,
      Certification,
      Education,
      WorkExperience,
      JobSeekerSkill,
    ]),
  ],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
