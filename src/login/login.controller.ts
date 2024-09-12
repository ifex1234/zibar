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

@Controller('api/login')
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiCreatedResponse({ type: LoginEntity })
  async create(@Res() response, @Body() createLoginDto: CreateLoginDto) {
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
  async findAll(@Res() response) {
    try {
      const data = await this.loginService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        data,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get(':username')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('username') username: string, @Res() response) {
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
  async update(
    @Param('username') username: string,
    @Body() updateLoginDto: UpdateLoginDto,
    @Res() response,
  ) {
    try {
      const existingStudent = await this.loginService.update(
        username,
        updateLoginDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Student has been successfully updated',
        existingStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':username')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('username') username: string, @Res() response) {
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
