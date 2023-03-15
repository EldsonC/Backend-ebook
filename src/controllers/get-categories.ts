import { Request, Response } from "express";
import { GetCategoriesService } from "../services/getData/get-categories";

export class GetCategoriesController {
    async execute(request:Request, response:Response) {
        try {
            const categories = new GetCategoriesService()

            const result = await categories.getCategories()

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