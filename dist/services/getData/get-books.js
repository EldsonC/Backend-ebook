"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBookService = void 0;
const books_1 = require("../../entities/books");
const database_1 = require("../../database");
class GetBookService {
    async getBook() {
        const repository = await database_1.AppDataSource.getRepository(books_1.Books)
            .createQueryBuilder("books")
            .select("*")
            .execute();
        return repository;
    }
}
exports.GetBookService = GetBookService;
