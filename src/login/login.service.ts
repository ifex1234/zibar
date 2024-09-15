/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { Model } from 'mongoose';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './login.schema';
import { ILogin } from '../login/interface/login.interface';
import * as bcrypt from 'bcrypt';
export const roundsOfHashing = 10;
@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private LoginModel: Model<Login>) {}
  async create(createLoginDto: CreateLoginDto) {
    // const createdLogin = new this.LoginModel(createLoginDto);
    // return createdLogin.save();
    const hashedPassword = await bcrypt.hash(
      createLoginDto.password,
      roundsOfHashing,
    );
    createLoginDto.password = hashedPassword;
    return this.LoginModel.create(createLoginDto);
  }

  async findAll(): Promise<ILogin[]> {
    const data = await this.LoginModel.find().exec();
    if (!data || data.length == 0) {
      throw new NotFoundException('user data not found!');
    }
    return data;
  }

  async findOne(username: string): Promise<ILogin> {
    const data = await this.LoginModel.findOne({ username: username }).exec();
    if (!data) {
      throw new NotFoundException(`user #${username} not found`);
    }
    return data;
  }

  async update(
    username: string,
    updateLoginDto: UpdateLoginDto,
  ): Promise<ILogin> {
    const existingUser = await this.LoginModel.findOneAndUpdate(
      { username: username },
      updateLoginDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`user #${username} not found`);
    }
    return existingUser;
  }

  async remove(username: string): Promise<ILogin> {
    const data = await this.LoginModel.findOneAndDelete({ username });
    if (!data) {
      throw new NotFoundException(`user #${username} not found`);
    }
    return data;
  }
}
