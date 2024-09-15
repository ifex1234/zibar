/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleLicenceDto } from './dto/create-driver-licence.dto';
import { UpdateVehicleLicenceDto } from './dto/update-driver-licence.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VehicleLicence } from './vehicle-licence.schema';
import { Model } from 'mongoose';
import { IVehicleLicence } from './interface/driver-licence.interface';

@Injectable()
export class VehicleLicenceService {
  constructor(
    @InjectModel(VehicleLicence.name)
    private VehicleLicenceModel: Model<VehicleLicence>,
  ) {}
  async create(createVehicleLicenceDto: CreateVehicleLicenceDto) {
    const data = await this.VehicleLicenceModel.create(createVehicleLicenceDto);
    return data.save();
  }

  async findAll(): Promise<IVehicleLicence[]> {
    const data = await this.VehicleLicenceModel.find();
    if (!data || data.length == 0) {
      throw new NotFoundException('users do not exist');
    }
    return data;
  }

  async findOne(vin: string): Promise<IVehicleLicence> {
    const data = await this.VehicleLicenceModel.findOne({ VIN: vin });
    if (!data) {
      throw new NotFoundException(
        `Vehicle licence with the ${vin} does not exist`,
      );
    }
    return data;
  }

  async update(
    vin: string,
    updateVehicleLicenceDto: UpdateVehicleLicenceDto,
  ): Promise<IVehicleLicence> {
    const data = await this.VehicleLicenceModel.findOneAndUpdate(
      { VIN: vin },
      updateVehicleLicenceDto,
      { new: true },
    );
    if (!data) {
      throw new NotFoundException(
        `Vehicle licence withe the VIN ${vin} does not exist`,
      );
    }
    return data;
  }

  async remove(vin: string): Promise<IVehicleLicence> {
    const data = await this.VehicleLicenceModel.findOneAndDelete({ VIN: vin });
    if (!data) {
      throw new NotFoundException(
        `Vehicle licence withe the VIN ${vin} does not exist`,
      );
    }
    return data;
  }
}
