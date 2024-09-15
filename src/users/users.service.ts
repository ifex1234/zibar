/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const data = await this.userModel.create(createUserDto);
    return data;
    // const data = new this.userModel(createUserDto);
    // return data.save();
  }

  async findAll(): Promise<IUser[]> {
    const data = await this.userModel.find().exec();
    if (!data || data.length === 0) {
      throw new NotFoundException('users record not available');
    }
    return data;
  }

  async findOne(nin: string): Promise<IUser> {
    const data = await this.userModel.findOne({ NIN: nin });
    if (!data) {
      throw new NotFoundException(`Record with the VIN ${nin} does not exist`);
    }
    return data;
  }

  async update(nin: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const data = await this.userModel.findOneAndUpdate(
      { NIN: nin },
      updateUserDto,
      {
        new: true,
      },
    );
    if (!data) {
      throw new NotFoundException(`record with VIN:${nin} not found`);
    }
    return data;
  }
}
