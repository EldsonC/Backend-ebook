"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookGet = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const books_1 = require("./books");
const students_1 = require("./students");
let BookGet = class BookGet {
    id;
    id_student;
    student;
    id_book;
    book;
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], BookGet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookGet.prototype, "id_student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => students_1.Students),
    (0, typeorm_1.JoinColumn)({
        name: "id_students"
    }),
    __metadata("design:type", students_1.Students)
], BookGet.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookGet.prototype, "id_book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => books_1.Books),
    (0, typeorm_1.JoinColumn)({
        name: "id_book"
    }),
    __metadata("design:type", books_1.Books)
], BookGet.prototype, "book", void 0);
BookGet = __decorate([
    (0, typeorm_1.Entity)("categories"),
    __metadata("design:paramtypes", [])
], BookGet);
exports.BookGet = BookGet;
