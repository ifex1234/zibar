/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  Header,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('/vin')
@ApiTags('vin')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ status: 201, description: 'VIN successfully created' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  async create(
    @Res({ passthrough: true }) response: Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    try {
      const data = await this.usersService.create(createUserDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'VIV successfully created',
        data,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statuscode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  @HttpCode(200)
  async findAll(@Res({ passthrough: true }) response: Response) {
    try {
      const data = await this.usersService.findAll();
      return response
        .status(HttpStatus.ACCEPTED)
        .json({ message: 'data successfully returned', data });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get(':id')
  //@UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOkResponse({ type: UserEntity })
  async findOne(
    @Param('id') vin: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.usersService.findOne(vin);
      return response
        .status(HttpStatus.ACCEPTED)
        .json({ message: `data with VIN:${vin} returned successfully`, data });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  //@UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(201)
  @ApiOkResponse({ type: UserEntity })
  update(
    @Param('id') vin: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = this.usersService.update(vin, updateUserDto);
      return response
        .status(HttpStatus.ACCEPTED)
        .json({ message: 'data returned successfully', data });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
