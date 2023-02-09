import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async add(user: UserDto): Promise<User> {
    const data = await this.usersRepository.create({
      Name: user.name,
      Email: user.email,
      Pincode: user.pincode,
      isActive: user.isActive,
    });
    return await this.usersRepository.save(data);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(id: number, user: UserDto): Promise<any> {
    const data = await this.usersRepository.findOneBy({ id });
    if (!data) {
      throw new HttpException(
        'Insert Unique Currency Code',
        HttpStatus.BAD_REQUEST,
      );
    }
    const updatedUser: User = {
      id: id,
      Email: user.email,
      Name: user.name,
      Pincode: user.pincode,
      isActive: user.isActive,
    };
    return await this.usersRepository.update(id, updatedUser);
  }
}
