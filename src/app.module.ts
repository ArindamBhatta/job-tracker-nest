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


@Module({
  //1. imports = which modules are included
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
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
  ],
  //2. controllers = which request handlers belong to this module
  controllers: [AppController],
  //3. providers = which injectable classes belong to this module
  providers: [AppService],
})
//4. exports = which providers this module shares with other modules
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
