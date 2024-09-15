/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
  HttpCode,
  Header,
} from '@nestjs/common';
import { VehicleLicenceService } from './vehicle-licence.service';
import { CreateVehicleLicenceDto } from './dto/create-driver-licence.dto';
import { UpdateVehicleLicenceDto } from './dto/update-driver-licence.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { VehicleLicenceEntity } from './entities/driver-licence.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Response } from 'express';

@Controller('/vehicle-licence')
@ApiTags('vehicle-licence')
export class VehicleLicenceController {
  constructor(private readonly vehicleLicenceService: VehicleLicenceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  @ApiCreatedResponse({ type: VehicleLicenceEntity })
  async create(
    @Res({ passthrough: true }) response: Response,
    @Body() createVehicleLicenceDto: CreateVehicleLicenceDto,
  ) {
    try {
      const data = await this.vehicleLicenceService.create(
        createVehicleLicenceDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Vehicle licence has been created successfully',
        data,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Error creating Vehicle licence',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  @ApiOkResponse({ type: VehicleLicenceEntity })
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiBearerAuth()
  async findAll(@Res({ passthrough: true }) response: Response) {
    try {
      const data = await this.vehicleLicenceService.findAll();
      return response
        .status(HttpStatus.OK)
        .json({ message: 'all Vehicle licences returned', data });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  async findOne(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.vehicleLicenceService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: `Vehicle licence with VIN:${id} found sucessfully`,
        data,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateDriverLicenceDto: UpdateVehicleLicenceDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.vehicleLicenceService.update(
        id,
        updateDriverLicenceDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Vehicle licence has been successfully updated',
        data,
      });
    } catch (errors) {
      return response.status(errors.status).json(errors.response);
    }
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @ApiBearerAuth()
  async remove(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.vehicleLicenceService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: 'Vehicle licence deleted successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
