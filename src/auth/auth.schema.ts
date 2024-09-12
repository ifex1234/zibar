/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoginDocument = HydratedDocument<Auth>;

@Schema()
//The @Schema() decorator marks a class as a schema definition. It maps our Login class to a
//MongoDB collection of the same name, but with an additional “s” at the end -
export class Auth {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
