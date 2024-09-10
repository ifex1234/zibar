/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoginDocument = HydratedDocument<Login>;

@Schema()
export class Login {
  @Prop()
  username: string;

  @Prop()
  code: number;

  @Prop()
  password: string;

  @Prop()
  email: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);
