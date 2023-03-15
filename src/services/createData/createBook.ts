import { Books } from "../../entities/books";
import { AppDataSource } from "../../database";

interface BookProps {
    cover: string;
    name: string;
    author: string;
    year: number;
    pages: number;
    category_id: string;
}

export class CreateBookService {
    async createBook({
        cover,
        name,
        author,
        year,
        pages,
        category_id,
    }:BookProps): Promise<Books | Error> {
        const repository = AppDataSource.getRepository(Books);

        const book = repository.create({
            cover,
            name,
            author,
            year,
            pages,
            category_id,
        })

        await repository.save(book)
        return book
    }
}