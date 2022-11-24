import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController} from "./auth.controller";
import { LocalStrategy } from './local.strategy';
import { ClientsModule, Transport } from "@nestjs/microservices";

import * as dotenv from 'dotenv';
dotenv.config()
@Module({
  providers: [AuthService,LocalStrategy],
  imports: [PassportModule,
    ClientsModule.register([{ name: 'dbService', transport: Transport.TCP }]),
    JwtModule.register({
    secret: process.env.jwtConstants_secret,
    signOptions: { expiresIn: process.env.jwtConstants_expiresIn },
  })],
  controllers: [AuthController]
})
export class AuthModule {}
