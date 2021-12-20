import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectsRespository: Repository<Project>
  ) { }

  create(createProjectDto: CreateProjectDto,) {
    return this.projectsRespository.save(createProjectDto)
  }

  findAll() {
    return this.projectsRespository.find({
      relations: ["user"]
    })
  }

  findOne(id: string) {
    return this.projectsRespository.
      findOne({ id: id }, {
        relations: ["user"]
      })
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectsRespository.save({
      id: id,
      ...updateProjectDto
    })
  }

  remove(id: string) {
    return this.projectsRespository.delete({
      id: id
    })
  }
}
