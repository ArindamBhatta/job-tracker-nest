import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pincode } from './entities/pincode.entity';
import { Location } from './entities/location.entity';
import { Skill } from './entities/skill.entity';
import { StatusType } from './entities/status-type.entity';
import { University } from './entities/university.entity';
import { Institute } from './entities/institute.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Pincode,
      Location,
      Skill,
      StatusType,
      University,
      Institute,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class SharedModule {}
