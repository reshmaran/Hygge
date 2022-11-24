import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import * as dotenv from 'dotenv';
dotenv.config()


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MongoDB_ConnectionUri,
      port: 20717,
      username: process.env.MongoDB_USER,
      password: process.env.MongoDB_PASSWORD,
      database: process.env.MongoDB_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    TypeOrmModule.forFeature([UserRepository, UserEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}