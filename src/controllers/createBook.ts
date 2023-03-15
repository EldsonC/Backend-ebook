import { CreateBookService } from "../services/createData/createBook";
import { Request, Response } from "express";

export class CreateBookController {
    async execute(request:Request, response:Response) {
        try {
            const { path } = request.file
            const {
                name,
                author,
                year,
                pages,
                category_id
            } = request.body

            const book = new CreateBookService()

            const result = await book.createBook({
                cover: path,
                name,
                author,
                year,
                pages,
                category_id
            })

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