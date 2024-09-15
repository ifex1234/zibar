/* eslint-disable prettier/prettier */
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { LoginService } from 'src/login/login.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';

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
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return {
      accessToken: await this.jwt_Service.signAsync({
        userUnique: user.id,
      }),
    };
  }
}
