import { Books } from "../entities/books";
import { AppDataSource } from "../database";

export class GetBooksService {
    async getBook(): Promise<Books | Error> {
        const repository = await AppDataSource.getRepository(Books)
            .createQueryBuilder("books")
            .select("*")
            .execute()

            return repository
    }
}