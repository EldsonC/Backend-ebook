import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Book1690472692219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cover",
                        type: "varchar",
                    },
                    {
                        name: "author",
                        type: "varchar"
                    },
                    {
                        name: "year",
                        type: "numeric",
                    },
                    {
                        name: "pages",
                        type: "varchar",
                    },
                    {
                        name: "category",
                        type: "varchar",
                    },
                    {
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }

}
