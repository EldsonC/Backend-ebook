import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class books1678730686780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

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
                        name: "cover",
                        type: "varchar"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "author",
                        type: "varchar"
                    },
                    {
                        name: "year",
                        type: "numeric"
                    },
                    {
                        name: "pages",
                        type: "numeric"
                    },
                    {
                        name: "category_id",
                        type: "varchar",
                    },
                    {
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_categorie",
                        columnNames: ["category_id"],
                        referencedTableName: "categories",
                        referencedColumnNames: ["name"]
                    }
                ]
            }),
        )

        await queryRunner.createTable(
            new Table({
                name: "students",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    }
                ]
                
            }),
        )

        await queryRunner.createTable(
            new Table({
                name: "booksget",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "student_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_student",
                        columnNames: ["student_id"],
                        referencedTableName: "students",
                        referencedColumnNames: ["id"]
                    }
                ]
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
        await queryRunner.dropTable("books")
        await queryRunner.dropTable("students")
        await queryRunner.dropTable("booksget")
    }

}
