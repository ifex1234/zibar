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
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('api/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
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

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const data = await this.loginService.findOne(+id);
      return response.status(HttpStatus.OK).json({
        message: 'user found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLoginDto: UpdateLoginDto,
    @Res() response,
  ) {
    try {
      const existingStudent = await this.loginService.update(
        Number(id),
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

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    try {
      const data = await this.loginService.remove(Number(id));
      return response.status(HttpStatus.OK).json({
        message: 'user deleted successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
