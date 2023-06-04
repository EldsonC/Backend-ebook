import { CreateStudentsService } from "../services/createData/createStudents";
import { Request, Response } from "express";

export class CreateStudentsController {
    async execute(request:Request, response:Response) {
        try {
            const {
                name,  
            } = request.body

            const students = new CreateStudentsService()

            const result = await students.createStudents({
                name,
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