
import { Entity, Column, Unique, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Project } from "../../project/entities/project.entity"
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

    @OneToMany(() => Project, project => project.user, { cascade: ['insert'] })
    projects: Project[]

}
