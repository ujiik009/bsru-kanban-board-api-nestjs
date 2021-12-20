import { Test, TestingModule } from '@nestjs/testing';
import { Project } from './entities/project.entity';
import { ProjectService } from './project.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProjectService', () => {
  let service: ProjectService;

  var mockProjects = [
    {
      "id": "2403d371-c79f-4e03-a17b-7ef9a7741a30",
      "name": "BSRU",
      "description": "-",
      "start_date": "-",
      "end_date": "-",
      "created_at": "-",
      "creator": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99",
      "user": {
        "id": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99",
        "email": "apirat14121ice@hotmail.com",
        "password": "1f32aa4c9a1d2ea010adcf2348166a04",
        "full_name": "Apirat Premachana",
        "phone": "0922567287",
        "position": "backend developer2",
        "bio": "-",
        "profile_path": ""
      }
    }
  ]

  beforeEach(async () => {
    const projectRepository = {
      find: jest.fn().mockImplementation(() => {
        return Promise.resolve(mockProjects)
      }),
      findOne: jest.fn().mockImplementation(() => {
        return Promise.resolve(mockProjects[0])
      }),
      save: jest.fn().mockImplementation((dto) => {
        return Promise.resolve({
          id: "uuid",
          ...dto
        })
      }),
      delete: jest.fn().mockImplementation(() => {
        return Promise.resolve({
          raw: {},
          affected: 0
        })
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectService,
        {
          provide: getRepositoryToken(Project),
          useValue: projectRepository
        }
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should be return Array of Project and relate user", async () => {
    expect(await service.findAll()).toEqual(mockProjects)
  })

  it("should be return item by id", async () => {
    var id = ""
    expect(await service.findOne(id)).toEqual(
      mockProjects[0]
    )
  })

  it("should be Create record Project", async () => {
    var dto = {
      "name": "BSRU Project",
      "description": "-",
      "start_date": "2021-01-01",
      "end_date": "2022-01-01",
      "created_at": "2021-01-01 00:00:01",
      "creator": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99"
    }

    expect(await service.create(dto)).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      start_date: expect.any(String),
      end_date: expect.any(String),
      created_at: expect.any(String),
      creator: expect.any(String),
    })

  })

  it("should be Update record Project", async () => {
    var dto = {
      "id": "fa1a0188-f8cb-4c0d-b3e3-9a565b9b4129",
      "name": "BSRU Project",
      "description": "-",
      "start_date": "2021-01-01",
      "end_date": "2022-01-01",
      "created_at": "2021-01-01 00:00:01",
      "creator": "cecf2049-705d-4745-9d2c-9d4e0fcdcf99"
    }

    expect(await service.update(dto.id, dto)).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      start_date: expect.any(String),
      end_date: expect.any(String),
      created_at: expect.any(String),
      creator: expect.any(String),
    })
  })

  it("should be Delete record", async () => {
    var id = ""
    expect(await service.remove(id)).toEqual({
      raw: expect.anything(),
      affected: expect.any(Number)
    })
  })
});
