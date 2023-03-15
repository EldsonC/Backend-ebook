import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db.umyfmwbkptoojdvjavik.supabase.co',
    port: 5432,
    username: 'postgres',
    password: 'Ebook@2023@',
    database: 'postgres',
    entities: [
        __dirname + "../../entities/*.ts"
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("===== | CONNECTED TO DATABASE | =====")
    })
    .catch((err) => {
        console.log("===== | DATABSAE NOT FOUND | =====" + err)
    })