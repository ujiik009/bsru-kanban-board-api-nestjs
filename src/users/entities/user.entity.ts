
import { Entity, Column, Unique, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Project } from "../../project/entities/project.entity"
import { Task } from './../../task/entities/task.entity';
@Entity()
export class User {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    @Unique(["email"])
    email: string

    @Column()
    password: string

    @Column()
    full_name: string

    @Column()
    phone: string

    @Column()
    position: string

    @Column()
    bio: string

    @Column("text")
    profile_path: string;

    @OneToMany(() => Project, project => project.user)
    projects: Project[];

    @OneToMany(() => Task, task => task.user)
    tasks: Task[]

}
