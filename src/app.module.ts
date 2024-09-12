/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './login/login.schema';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { DriverLicenceModule } from './driver-licence/driver-licence.module';
import { RoadWorthinessModule } from './road-worthiness/road-worthiness.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    LoginModule,
    MongooseModule.forRoot(
      'mongodb+srv://ifex1234:GrQ20bGgJLbPRmCi@clusterfirst.kpl7fpn.mongodb.net/?retryWrites=true&w=majority',
    ),
    //We use the forFeature() method to register the models in the current scope.
    MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema }]),
    DriverLicenceModule,
    RoadWorthinessModule,
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
