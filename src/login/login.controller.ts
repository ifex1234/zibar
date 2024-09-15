/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  UseGuards,
  HttpCode,
  Header,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginEntity } from './entities/login.entity';
import { Response } from 'express';

@Controller('login')
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiCreatedResponse({ type: LoginEntity })
  @ApiBearerAuth()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  async create(
    @Res({ passthrough: true }) response: Response, //passthrough is used to ensure  compatibility with Nest
    //features that depend on Nest standard response handling, such as Interceptors and @HttpCode() / @Header() decorators.
    @Body() createLoginDto: CreateLoginDto,
  ) {
    try {
      const newUser = await this.loginService.create(createLoginDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'user has been created successfully',
        newUser,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: LoginEntity })
  @ApiBearerAuth()
  @HttpCode(200)
  async findAll(@Res({ passthrough: true }) response: Response) {
    try {
      const data = await this.loginService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All users data found successfully',
        data,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get(':username')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOkResponse({ type: LoginEntity })
  async findOne(
    @Param('username') username: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.loginService.findOne(username);
      return response.status(HttpStatus.OK).json({
        message: 'user found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':username')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  async update(
    @Param('username') username: string,
    @Body() updateLoginDto: UpdateLoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.loginService.update(username, updateLoginDto);
      return response.status(HttpStatus.OK).json({
        message: 'user has been successfully updated',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':username')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  async remove(
    @Param('username') username: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const data = await this.loginService.remove(username);
      return response.status(HttpStatus.OK).json({
        message: 'user deleted successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
