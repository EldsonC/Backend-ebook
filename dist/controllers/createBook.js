"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookController = void 0;
const createBook_1 = require("../services/createData/createBook");
class CreateBookController {
    async execute(request, response) {
        try {
            const { path } = request.file ? request.file : "";
            const { name, author, year, pages, category_id } = request.body;
            const book = new createBook_1.CreateBookService();
            const result = await book.createBook({
                cover: path,
                name,
                author,
                year,
                pages,
                category_id
            });
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
            return response.json(result);
        }
        catch (err) {
            console.error(err);
            response.status(500).json({
                message: "Internal Error"
            });
        }
    }
}
exports.CreateBookController = CreateBookController;
