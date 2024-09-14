/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Zibar')
    .setDescription('vehicle indentification management system')
    .setVersion('1.0')
    .addTag('VIMS')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { jsonDocumentUrl: 'api/json' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
