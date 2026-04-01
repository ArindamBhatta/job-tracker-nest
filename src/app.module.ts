import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './modules/shared/shared.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CompaniesModule } from './modules/companies/companies.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { CandidatesModule } from './modules/candidates/candidates.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '', // Assuming no password as per docker setup
      database: 'job_tracker_db',
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query', 'error'],
    }),
    AuthModule,
    UsersModule,
    SharedModule,
    CompaniesModule,
    JobsModule,
    ApplicationsModule,
    CandidatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
