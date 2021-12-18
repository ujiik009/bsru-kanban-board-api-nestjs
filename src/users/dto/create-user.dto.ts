export class CreateUserDto {
    email: string;
    password: string;
    full_name: string;
    phone: string;
    position: string;
    bio: string;
    profile_path: string;
    projects: Array<any>;
}
