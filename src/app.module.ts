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
import { RoadWorthinessModule } from './road-worthiness/road-worthiness.module';
import { VehicleLicenceModule } from './driver-licence/vehicle-licence.module';
import { VehicleLicenceSchema } from './driver-licence/vehicle-licence.schema';
import { VehicleLicenceController } from './driver-licence/vehicle-licence.controller';
import { VehicleLicenceService } from './driver-licence/vehicle-licence.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/schema/user.schema';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }), //As accessing process.env can be slow, we set the cache property
    // of the options object passed to ConfigModule.forRoot() to increase the performance of ConfigService#get
    // method when it comes to variables stored in process.env .
    UsersModule,
    VehicleLicenceModule,
    AuthModule,
    LoginModule,
    ThrottlerModule.forRoot([{ ttl: 100, limit: 3 }]),
    MongooseModule.forRoot(
      'mongodb+srv://ifex1234:GrQ20bGgJLbPRmCi@clusterfirst.kpl7fpn.mongodb.net/?retryWrites=true&w=majority',
    ),
    //We use the forFeature() method to register the models in the current scope.
    MongooseModule.forFeature([
      { name: 'Login', schema: LoginSchema },
      { name: 'Vehicle-licence', schema: VehicleLicenceSchema },
      { name: 'VIN', schema: UserSchema },
    ]),
    VehicleLicenceModule,
    RoadWorthinessModule,
    UsersModule,
  ],
  controllers: [
    AppController,
    LoginController,
    VehicleLicenceController,
    UsersController,
    HealthController,
  ],
  providers: [AppService, LoginService, VehicleLicenceService, UsersService],
})
export class AppModule {}
