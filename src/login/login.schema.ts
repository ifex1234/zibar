/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoginDocument = HydratedDocument<Login>;

@Schema({ timestamps: true })
//The @Schema() decorator marks a class as a schema definition. It maps our Login class to a
//MongoDB collection of the same name, but with an additional “s” at the end -
export class Login {
  @Prop({ required: true, unique: true, immutable: true, trim: true })
  username: string;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);
