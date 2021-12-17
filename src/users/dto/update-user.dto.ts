import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id:string;
    email: string;
    password: string;
    full_name: string;
    phone: string;
    position: string;
    bio: string;
    profile_path: string;
}
