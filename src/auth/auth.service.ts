/* eslint-disable prettier/prettier */
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { LoginService } from 'src/login/login.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwt_Service: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<AuthEntity> {
    const user = await this.loginService.findOne(username);
    if (!user) {
      throw new NotFoundException(`No user found for username: ${username}`);
    }
    const isPasswordValid = user.password === pass;
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return {
      accessToken: this.jwt_Service.sign({ userUnique: user.username }),
    };
  }
}
