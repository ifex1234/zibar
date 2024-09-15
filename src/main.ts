/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, //we use 200 as some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  const app = await NestFactory.create(AppModule);
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
  app.enableCors(corsOptions); //set CORS to only IP listed in the config.
  app.setGlobalPrefix('api/');
  app.use(helmet()); //Help secure the app by setting HTTP response headers.
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
