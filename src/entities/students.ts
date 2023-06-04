import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("students")
export class Students {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}