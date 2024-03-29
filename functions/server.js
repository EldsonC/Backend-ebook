"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../dist/routes/routes");
const app = (0, express_1.default)();
const serverless = require("serverless-http");
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({
    extended: true
}));

app.use(express_1.default.json());
app.use("/.netlify/functions/server", routes_1.router);

module.exports = app
module.exports.handler = serverless(app)
