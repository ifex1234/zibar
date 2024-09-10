import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverLicenceService } from './driver-licence.service';
import { CreateDriverLicenceDto } from './dto/create-driver-licence.dto';
import { UpdateDriverLicenceDto } from './dto/update-driver-licence.dto';

@Controller('driver-licence')
export class DriverLicenceController {
  constructor(private readonly driverLicenceService: DriverLicenceService) {}

  @Post()
  create(@Body() createDriverLicenceDto: CreateDriverLicenceDto) {
    return this.driverLicenceService.create(createDriverLicenceDto);
  }

  @Get()
  findAll() {
    return this.driverLicenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverLicenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverLicenceDto: UpdateDriverLicenceDto) {
    return this.driverLicenceService.update(+id, updateDriverLicenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverLicenceService.remove(+id);
  }
}
