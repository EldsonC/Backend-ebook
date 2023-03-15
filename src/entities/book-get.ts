import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm"
import { v4 as uuid } from "uuid"
import { Books } from "./books";
import { Students } from "./students";

@Entity("categories")
export class BookGet {
    @PrimaryColumn()
    id: string;

    @Column()
    id_student: string;

    @ManyToOne(() => Students)
    @JoinColumn({
        name: "id_students"
    })
    student: Students
    

    @Column()
    id_book: string;

    @ManyToOne(() => Books)
    @JoinColumn({
        name: "id_book"
    })
    book: Books

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}