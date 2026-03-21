import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Designation } from './entities/designation.entity';
import { Interviewer } from './entities/interviewer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company, Designation, Interviewer]),
  ],
  exports: [TypeOrmModule],
})
export class CompaniesModule {}
