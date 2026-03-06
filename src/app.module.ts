import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fitness.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query', 'error'],
    }),
    ExercisesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
