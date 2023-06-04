import { Categories } from "../../entities/categories";
import { AppDataSource } from "../../database";

export class GetCategoriesService {
    async getCategories(): Promise<Categories | Error> {
        const repository = await AppDataSource.getRepository(Categories)
            .createQueryBuilder("books")
            .select("*")
            .execute()
        
        console.log(repository)
        return repository
    }
}