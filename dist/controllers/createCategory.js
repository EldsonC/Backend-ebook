"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const createCategory_1 = require("../services/createData/createCategory");
class CreateCategoryController {
    async execute(request, response) {
        try {
            const { name, } = request.body;
            const category = new createCategory_1.CreateCategoryService();
            const result = await category.createCategory({
                name,
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
exports.CreateCategoryController = CreateCategoryController;
