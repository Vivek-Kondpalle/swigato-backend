import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config({ path: '.env.local' });
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true, // Automatically transform payloads to match the DTO classes
    disableErrorMessages: false,
  }));
  await app.listen(3000);
}
bootstrap();
