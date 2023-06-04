"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookService = void 0;
const books_1 = require("../../entities/books");
const database_1 = require("../../database");
class CreateBookService {
    async createBook({ cover, name, author, year, pages, category_id, }) {
        const repository = database_1.AppDataSource.getRepository(books_1.Books);
        const book = repository.create({
            cover,
            name,
            author,
            year,
            pages,
            category_id,
        });
        await repository.save(book);
        return book;
    }
}
exports.CreateBookService = CreateBookService;
