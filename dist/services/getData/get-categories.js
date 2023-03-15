"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoriesService = void 0;
const categories_1 = require("../../entities/categories");
const database_1 = require("../../database");
class GetCategoriesService {
    async getCategories() {
        const repository = await database_1.AppDataSource.getRepository(categories_1.Categories)
            .createQueryBuilder("books")
            .select("*")
            .execute();
        console.log(repository);
        return repository;
    }
}
exports.GetCategoriesService = GetCategoriesService;
