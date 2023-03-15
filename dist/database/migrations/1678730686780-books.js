"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books1678730686780 = void 0;
const typeorm_1 = require("typeorm");
class books1678730686780 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("categories");
        await queryRunner.dropTable("books");
    }
}
exports.books1678730686780 = books1678730686780;
