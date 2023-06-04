"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBookController = void 0;
const get_books_1 = require("../services/getData/get-books");
class GetBookController {
    async execute(request, response) {
        try {
            const book = new get_books_1.GetBookService();
            const result = await book.getBook();
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
exports.GetBookController = GetBookController;
