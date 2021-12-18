import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User } from "../../users/entities/user.entity"

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

    @ManyToOne(() => User, user => user.projects)
    user: User;
}
