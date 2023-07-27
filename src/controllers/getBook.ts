import { Request, Response } from "express"
import { GetBooksService } from "../services/getBook"

export class GetBookController {
    async execute(request:Request, response:Response) {
        try {
            const book = new GetBooksService()
            const responseCall = await book.getBook()

            if (responseCall instanceof Error) {
                return response.status(400).json(responseCall.message)
            }

            return response.json(responseCall)
        } catch(err) {
            response.status(500).json({
                message: `Internal error: ${err}`
            })
        }
    } 
}