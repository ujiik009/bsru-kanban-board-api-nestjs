import { Module } from '@nestjs/common';
import { AppController } from './app.controller';


import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';


import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    TypeOrmModule.forRoot(),
    ProjectModule,
    TaskModule,
    UsersModule,
    AuthModule],
  controllers: [AppController],

})
export class AppModule {
  constructor(private connection: Connection) {

  }
}
