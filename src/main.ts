import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  const port = 6900;
  await app.listen(port);
  console.log(`Server listening on port ${port}...`);
}
bootstrap();
