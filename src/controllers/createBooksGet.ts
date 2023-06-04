import { CreateBooksGetService } from "../services/createData/createBooksGet";
import { Request, Response } from "express";

export class CreateBooksGetController {
    async execute(request:Request, response:Response) {
        try {
            const {
                name,
                student_id
            } = request.body

            const booksGet = new CreateBooksGetService()

            const result = await booksGet.createBooksGet({
                name,
                student_id
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