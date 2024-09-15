/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  firstName: string;
  @Prop({ required: true, trim: true })
  lastName: string;
  @Prop({ required: true, trim: true, immutable: true, unique: true })
  NIN: string;
  @Prop({ required: false, immutable: true, unique: true })
  VIN: string;
  @Prop({ required: true, trim: true })
  stateOfOrigin: string;
  @Prop({ required: true, trim: true })
  stateOfResidence: string;
  @Prop({ required: true, trim: true })
  LGAOfResidence: string;
  @Prop({ required: true, trim: true })
  address: string;
  @Prop({ required: true, trim: true, unique: true })
  driverLicenceNo: string;
  @Prop({ required: true, trim: true, unique: true })
  email: string;
  @Prop({ required: true, trim: true, unique: true })
  phoneNo: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
