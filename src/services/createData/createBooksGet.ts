import { BooksGet } from "../../entities/booksget";
import { AppDataSource } from "../../database";

interface BooksGetProps {
    name: string,
    student_id: string
}

export class CreateBooksGetService {
    async createBooksGet({
        name,
        student_id
    }:BooksGetProps): Promise<BooksGet | Error> {
        const repository = AppDataSource.getRepository(BooksGet);

        const booksget = repository.create({
            name: name,
            student_id: student_id
        })

        await repository.save(booksget)
        return booksget
    }
}