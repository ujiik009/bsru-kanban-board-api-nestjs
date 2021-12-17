
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    email: string

    @Column({ select: false })
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



}
