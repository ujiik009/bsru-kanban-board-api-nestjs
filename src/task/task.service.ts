import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';


@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,

  ) {

  }
  async create(createTaskDto: CreateTaskDto) {

    return this.tasksRepository.save(createTaskDto)

  }

  findAll() {
    return this.tasksRepository.find()
  }

  findOne(id: string) {
    return this.tasksRepository.findOne(id)
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.save(updateTaskDto)
  }

  remove(id: string) {
    return this.tasksRepository.delete({
      id: id
    })
  }
}
