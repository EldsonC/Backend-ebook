"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db.xhadfebllisizvgirzhs.supabase.co',
    port: 5432,
    username: 'postgres',
    password: 'EinsteinE13@@tes',
    database: 'postgres',
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
