import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
@Injectable()
export class AppService {
 // private id: FindOneOptions<Entity>;

  constructor(
    private readonly UserRepository: UserRepository,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  userLogin(itemDto) {
    return 1;
  }
}
