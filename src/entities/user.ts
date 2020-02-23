import {
    Check,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    ViewColumn,
    ViewEntity
} from "typeorm";

@Entity()
export class User {
    @PrimaryColumn({
        type: "varchar",
        length: 36,
        nullable: false
    })
    id: string;

    @Column({
        nullable: false,
        type: "varchar",
        length: 30
    })
    name: string;

    @Column({
        nullable: false,
        type: "varchar",
        length: 100
    })
    surname: string;

    @Column({
        nullable: false,
        type: "blob"
    })
    password: Buffer;

    @Column({
        nullable: false,
        type: "varchar",
        length: 100
    })
    role: string;
}
