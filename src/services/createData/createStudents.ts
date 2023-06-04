import { Students } from "../../entities/students";
import { AppDataSource } from "../../database";

interface StudentsProps {
    name: string;
}

export class CreateStudentsService {
    async createStudents({
        name
    }:StudentsProps): Promise<Students | Error> {
        const repository = AppDataSource.getRepository(Students);

        const students = repository.create({
            name: name
        })

        await repository.save(students)
        return students
    }
}