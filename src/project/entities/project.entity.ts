import { JoinColumn } from "typeorm";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { User } from "../../users/entities/user.entity"
import { Task } from './../../task/entities/task.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column("text")
    description: string

    @Column()
    start_date: string

    @Column()
    end_date: string

    @Column()
    created_at: string

    @Column()
    creator:string


    @ManyToOne(() => User, user => user.projects)
    @JoinColumn({ name: "creator" })
    user: User;

    @OneToMany(() => Task, task => task.project)
    tasks: Task[]
}
