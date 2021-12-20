import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const mockUserService = {
      save: jest.fn().mockImplementation((dto) => {
        return Promise.resolve({
          id: "uuid",
          ...dto
        })
      }),
      findOne: jest.fn().mockImplementation((id: string) => {
        return Promise.resolve({
          id: "uuid",
          email: "",
          full_name: "",
          phone: "",
          position: "",
          bio: "",
          profile_path: ""
        })
      }),
      find: jest.fn().mockImplementation(() => {

      }),
      delete: jest.fn().mockImplementation(() => {

      })
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {
        provide: getRepositoryToken(User),
        useValue: mockUserService
      }],
    })

      .compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should be create user and return that record", async () => {
    const dto = {
      email: "test@email.com",
      password: "123456",
      full_name: "Apirat premchana",
      phone: "028900407",
      position: "Dev",
      bio: "*-*",
      profile_path: "-",
    }
    expect(await service.create(dto)).toEqual({
      id: expect.any(String),
      email: "test@email.com",
      password: "123456",
      full_name: "Apirat premchana",
      phone: "028900407",
      position: "Dev",
      bio: "*-*",
      profile_path: "-",
    })

  })

  it("should be findOne and return one record", async () => {
    var id = "65861943-e330-45dc-8a72-849eaa5cda28"
    expect(await service.findOne(id)).toEqual({
      id: expect.any(String),
      email: expect.any(String),
      full_name: expect.any(String),
      phone: expect.any(String),
      position: expect.any(String),
      bio: expect.any(String),
      profile_path: expect.any(String),
    })

    
  })




});
