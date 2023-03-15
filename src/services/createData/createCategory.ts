import { Categories } from "../../entities/categories";
import { AppDataSource } from "../../database";

interface CategoryProps {
    name: string;
}

export class CreateCategoryService {
    async createCategory({
        name
    }:CategoryProps): Promise<Categories | Error> {
        const repository = AppDataSource.getRepository(Categories);

        const categories = repository.create({
            name: name
        })

        await repository.save(categories)
        return categories
    }
}