/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
export class LoginEntity {
  constructor(partial: Partial<LoginEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  email: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  code: number;
  @Exclude()
  @ApiProperty()
  password: string;
}
