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
        name
        
    }:BookProps): Promise<Books | Error> {
        const repository = AppDataSource.getRepository(Books);

        const book = repository.create({
            
        })

        await repository.save(book)
        return book
    }
}