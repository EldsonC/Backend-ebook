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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
        await queryRunner.dropTable("books")
    }

}
