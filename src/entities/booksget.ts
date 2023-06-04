import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Students } from "./students";

@Entity("booksget")
export class BooksGet {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    student_id: string;

    @ManyToOne(() => Students)
    @JoinColumn({
        name: "student_id"
    })
    student: Students

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}