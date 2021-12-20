import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from './../../users/entities/user.entity';
import { Project } from './../../project/entities/project.entity';

enum State {
    todo = "todo",
    in_progress = "in_progress",
    done = "done"
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        type: "enum",
        enum: State,
        default: State.todo
    })
    state: string

    @Column()
    color: string;

    @Column()
    due_date: string

    @Column()
    assign_to: string;

    @Column()
    project_id: string;

    @ManyToOne(() => User, user => user.tasks)
    @JoinColumn({ name: "assign_to" })
    user: User


    @ManyToOne(() => Project, project => project.tasks)
    @JoinColumn({ name: "project_id" })
    project: Project
}
