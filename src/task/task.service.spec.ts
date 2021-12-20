import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';


const mockTasks = [
  {
    "id": "34c84d46-7323-447d-b71b-dcc20381bc8d",
    "name": "Task testing",
    "description": "-",
    "state": "todo",
    "color": "red",
    "due_date": "2021-01-01",
    "assign_to": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99",
    "project_id": "2403d371-c79f-4e03-a17b-7ef9a7741a30"
  }
]

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const mockTaskRespository = {
      save: jest.fn().mockImplementation((dto) => {
        return Promise.resolve({
          id: "uuid",
          ...dto
        })
      }),
      find: jest.fn().mockImplementation(() => {
        return Promise.resolve(mockTasks)
      }),
      findOne: jest.fn().mockImplementation(() => {
        return Promise.resolve(mockTasks[0])
      }),
      delete: jest.fn().mockImplementation(() => {
        return Promise.resolve({
          raw: {},
          affected: 0
        })
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRespository
        }
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should be Create Task", async () => {

    const dto = {
      "name": "Task testing",
      "description": "-",
      "state": "todo",
      "color": "red",
      "due_date": "2021-01-01",
      "assign_to": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99",
      "project_id": "2403d371-c79f-4e03-a17b-7ef9a7741a30"
    }

    expect(await service.create(dto)).toEqual({
      id: expect.any(String),
      description: expect.any(String),
      name: expect.any(String),
      state: expect.any(String),
      color: expect.any(String),
      due_date: expect.any(String),
      assign_to: expect.any(String),
      project_id: expect.any(String),
    })
  })


  it("should be Return Array of Task", async () => {
    expect(await service.findAll()).toEqual(mockTasks)
  })

  it("should be return Item of Task", async () => {
    var id = "34c84d46-7323-447d-b71b-dcc20381bc8d"
    expect(await service.findOne(id)).toEqual(
      {
        id: expect.any(String),
        description: expect.any(String),
        name: expect.any(String),
        state: expect.any(String),
        color: expect.any(String),
        due_date: expect.any(String),
        assign_to: expect.any(String),
        project_id: expect.any(String),
      }
    )
  })

  it("should be Update Task", async () => {
    const dto = {
      "id": "34c84d46-7323-447d-b71b-dcc20381bc8d",
      "name": "Task testing",
      "description": "-",
      "state": "todo",
      "color": "red",
      "due_date": "2021-01-01",
      "assign_to": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99",
      "project_id": "2403d371-c79f-4e03-a17b-7ef9a7741a30"
    }

    expect(await service.update(dto.id, dto)).toEqual(
      {
        id: expect.any(String),
        description: expect.any(String),
        name: expect.any(String),
        state: expect.any(String),
        color: expect.any(String),
        due_date: expect.any(String),
        assign_to: expect.any(String),
        project_id: expect.any(String),
      }
    )
  })

  it("should be Remove Task", async () => {
    const id = "34c84d46-7323-447d-b71b-dcc20381bc8d"
    expect(await service.remove(id)).toEqual({
      raw: expect.any(Object),
      affected: expect.any(Number)
    })
  })

});
