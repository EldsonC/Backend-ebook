"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const categories_1 = require("../../entities/categories");
const database_1 = require("../../database");
class CreateCategoryService {
    async createCategory({ name }) {
        const repository = database_1.AppDataSource.getRepository(categories_1.Categories);
        const categories = repository.create({
            name: name
        });
        await repository.save(categories);
        return categories;
    }
}
exports.CreateCategoryService = CreateCategoryService;
