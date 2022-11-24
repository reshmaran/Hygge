import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class AuthService {
  private jwtService: JwtService;

  constructor(
    @Inject('dbService') private readonly dbService: ClientProxy
  ) {}


  async createToken(user: any) {
    const accessToken = await this.jwtService.sign({ user });
    return { accessToken };
  }
  
  userLogin(createItemDto) {

    console.log('gateway',createItemDto);

    return this.dbService.send('userLogin', createItemDto);
  }
}
