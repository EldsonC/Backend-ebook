import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: "db.xhadfebllisizvgirzhs.supabase.co",
    port: 5432,
    username: "postgres",
    password: "EinsteinE13@@tes",
    database: "postgres",
    entities: [
        __dirname + "../../entities/*[.ts, .js]"
    ],
    migrations: [
        "./migrations/*[.ts, .js]"
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("==== | CONNECTED TO DATABASE | ====")
    })
    .catch((err) => {
        console.log("==== | DATABASE NOT FOUND | ====")
    })