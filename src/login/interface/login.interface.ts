/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
//define how our data object structure will look like
export interface ILogin extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}
