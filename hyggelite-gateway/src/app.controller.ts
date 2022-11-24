import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
@MessagePattern('userlogin')
getProfiles() {
  return this.appService.getHello();
}

}
