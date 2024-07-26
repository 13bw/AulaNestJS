import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {}


  @Post()
  async createUser(@Body() userData: UserDto) {
    const salt = this.configService.get('SALT');
    userData.name = await bcrypt.hash(userData.name, salt);
    return userData;
    // return this.userService.create(userData);
  }

  @Get('findbyname')
  findByName(@Query('name') name: string) {
    return this.userService.findByName(name);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Delete()
  delete(@Query('name') name: string) {
    return this.userService.delete(name);
  }
}
