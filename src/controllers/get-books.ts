import { Request, Response } from "express";
import { GetBookService } from "../services/getData/get-books";

export class GetBookController {
    async execute(request:Request, response:Response) {
        try {
            const book = new GetBookService()

            const result = await book.getBook()

            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }

            return response.json(result)
        } catch(err) {
            console.error(err)
            response.status(500).json({
                message: "Internal Error"
            })
        }

    }
}