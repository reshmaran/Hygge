import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { it } from "node:test";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('userLogin')
  userLogin(itemDto) {
    console.log('micro',itemDto);
    return this.appService.userLogin(itemDto)
  }

}
