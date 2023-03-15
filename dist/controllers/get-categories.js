"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoriesController = void 0;
const get_categories_1 = require("../services/getData/get-categories");
class GetCategoriesController {
    async execute(request, response) {
        try {
            const categories = new get_categories_1.GetCategoriesService();
            const result = await categories.getCategories();
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
exports.GetCategoriesController = GetCategoriesController;
