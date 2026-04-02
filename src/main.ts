import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //Create Nest App (HTTP Server)
  const app = await NestFactory.create(AppModule); //
  //** 🛡️ 4. Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('Job Tracker App API')
    .setDescription('The Job Tracker App API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/doc`);
}
bootstrap();

/* 
Guard = entry permission
Pipe = input validation/transformation 🛡️ 4. Global Validation Pipe
Interceptor = request/response wrapper behavior
DTO = data schema/contract, not pipeline step

Middleware -> Guard -> Interceptor (before) -> Pipe -> Controller -> Service -> Interceptor (after) -> Filter (if error)
*/