import { CreateCategoryService } from "../services/createData/createCategory";
import { Request, Response } from "express";

export class CreateCategoryController {
    async execute(request:Request, response:Response) {
        try {
            const {
                name,  
            } = request.body

            const category = new CreateCategoryService()

            const result = await category.createCategory({
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