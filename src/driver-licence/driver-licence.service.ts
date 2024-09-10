import { Injectable } from '@nestjs/common';
import { CreateDriverLicenceDto } from './dto/create-driver-licence.dto';
import { UpdateDriverLicenceDto } from './dto/update-driver-licence.dto';

@Injectable()
export class DriverLicenceService {
  create(createDriverLicenceDto: CreateDriverLicenceDto) {
    return 'This action adds a new driverLicence';
  }

  findAll() {
    return `This action returns all driverLicence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverLicence`;
  }

  update(id: number, updateDriverLicenceDto: UpdateDriverLicenceDto) {
    return `This action updates a #${id} driverLicence`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverLicence`;
  }
}
