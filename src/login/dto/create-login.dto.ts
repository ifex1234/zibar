/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// validation file
export class CreateLoginDto {
  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
// A DTO is an object that defines how the data will be sent over the network. We could determine the DTO
// schema by using TypeScript interfaces, or by simple classes. Using classes here recommended because Classes
// are part of the JavaScript ES6 standard, and therefore they are preserved as real entities in the compiled
// JavaScript. On the other hand, since TypeScript interfaces are removed during the transpilation,
//  Nest can't refer to them at runtime.
