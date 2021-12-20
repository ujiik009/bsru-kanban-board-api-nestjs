import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Task } from 'src/task/entities/task.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      email: email
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.save(updateUserDto)
  }

  remove(id: string) {
    return this.usersRepository.delete({ id: id })
  }

  async tasks(id: string) : Promise<Array<Task>>{
    var userItem = await this.usersRepository.findOne(id, {
      relations: ["tasks"],
    })
    return userItem.tasks
  }
}
