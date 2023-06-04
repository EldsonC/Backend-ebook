import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Categories } from "./categories";

@Entity("books")
export class Books {
    @PrimaryColumn()
    id: string;

    @Column()
    cover: string;

    @Column()
    name: string;

    @Column() 
    author: string;

    @Column()
    category_id: string;

    @ManyToOne(() => Categories)
    @JoinColumn({
        name: "category_id"
    })
    category: Categories

    @Column() 
    year: number;

    @Column()
    pages: number;

    @CreateDateColumn()
    created_At: Date;


    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}