import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity("books")
export class Books {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cover: string;

    @Column()
    author: string;

    @Column()
    year: number;

    @Column()
    pages: number;

    @CreateDateColumn()
    created_At: Date

    constructor() {
        !this.id ? this.id = uuid() : false 
    }


}