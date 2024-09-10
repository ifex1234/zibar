/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { Model } from 'mongoose';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './login.schema';
import { ILogin } from '../login/interface/login.interface';
@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private LoginModel: Model<Login>) {}
  async create(createLoginDto: CreateLoginDto): Promise<ILogin> {
    const createdLogin = new this.LoginModel(createLoginDto);
    return createdLogin.save();
  }

  async findAll(): Promise<ILogin[]> {
    const data = await this.LoginModel.find().exec();
    if (!data || data.length == 0) {
      throw new NotFoundException('user data not found!');
    }
    return data;
  }

  async findOne(id: number): Promise<ILogin> {
    const data = await this.LoginModel.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return data;
  }

  async update(id: number, updateLoginDto: UpdateLoginDto): Promise<ILogin> {
    const existingUser = await this.LoginModel.findByIdAndUpdate(
      id,
      updateLoginDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return existingUser;
  }

  async remove(id: number): Promise<ILogin> {
    const data = await this.LoginModel.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return data;
  }
}
