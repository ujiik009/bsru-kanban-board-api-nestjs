import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const mockUserService = {
    create: jest.fn(dto => {
      return {
        id: new Date().toDateString(),
        ...dto
      }
    }),
    update: jest.fn(dto => {
      return {
        ...dto
      }
    })
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should create User", () => {
    expect(controller.create({
      email: "test@email.com",
      password: "123456",
      full_name: "Apirat premchana",
      phone: "028900407",
      position: "Dev",
      bio: "*-*",
      profile_path: "-",
    }))
      .toEqual({
        id: expect.any(String),
        email: "test@email.com",
        password: expect.any(String),
        full_name: "Apirat premchana",
        phone: "028900407",
        position: "Dev",
        bio: "*-*",
        profile_path: "-",
      })
  })

 
});
