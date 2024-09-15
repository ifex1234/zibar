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

  async findOne(vin: string): Promise<IUser> {
    const data = await this.userModel.findOne({ VIN: vin });
    if (!data) {
      throw new NotFoundException(`Record with the VIN ${vin} does not exist`);
    }
    return data;
  }

  async update(vin: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const data = await this.userModel.findOneAndUpdate(
      { VIN: vin },
      updateUserDto,
      {
        new: true,
      },
    );
    if (!data) {
      throw new NotFoundException(`record with VIN:${vin} not found`);
    }
    return data;
  }
}
