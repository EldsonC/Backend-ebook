"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: '149.62.37.154',
    port: 3306,
    username: 'u719074247_ebook',
    password: 'EinsteinE13@',
    database: 'u719074247_ebook',
    entities: [
        __dirname + "../../entities/*.js"
    ],
    migrations: [
        "./src/database/migrations/*.js"
    ]
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("===== | CONNECTED TO DATABASE | =====");
})
    .catch((err) => {
    console.log("===== | DATABSAE NOT FOUND | =====" + err);
});
