/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';
export class CreateLoginDto {
  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  readonly username: string;
  @IsNumber()
  @IsNotEmpty()
  readonly code: number;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}
