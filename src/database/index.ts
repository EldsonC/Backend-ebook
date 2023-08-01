import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: "149.62.37.154",
    port: 3306,
    username: "u719074247_ebook",
    password: "EinsteinE13@",
    database: "u719074247_ebook",
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