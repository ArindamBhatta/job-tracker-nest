import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplication } from './entities/job-application.entity';
import { ApplicationStatus } from './entities/application-status.entity';
import { Interview } from './entities/interview.entity';
import { InterviewFeedback } from './entities/interview-feedback.entity';
import { Notification } from './entities/notification.entity';
import { Message } from './entities/message.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobApplication,
      ApplicationStatus,
      Interview,
      InterviewFeedback,
      Notification,
      Message,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class ApplicationsModule {}
