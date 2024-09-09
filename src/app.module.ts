import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, AuthModule, LoginModule, MongooseModule.forRoot('mongodb://127.0.0.1/ifex')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
