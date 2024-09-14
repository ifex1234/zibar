/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema, Auth } from './auth.schema';
import { JwtStrategy } from './jwt.strategy';
import { LoginModule } from 'src/login/login.module';
import { jwtSecret } from './constant';

// export const jwtSecret = 'zjP9h6ZI5LoSKCRj';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    PassportModule,
    JwtModule.register({
      global: true, //We're registering the JwtModule as global to make things easier for us.
      //This means that we don't need to import the JwtModule anywhere else in our application.
      secret: jwtSecret.secret,
      signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
    LoginModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [MongooseModule],
})
export class AuthModule {}
// If the vast majority of your endpoints should be protected by default, you can register the
// authentication guard as a and instead of using @UseGuards() decorator on top of each
// controller, you could simply flag which routes should be public.
// providers: [
//   {
//     provide: APP_GUARD,
//     useClass: JwtStrategy,
//   },
//   AuthService,
// ],
