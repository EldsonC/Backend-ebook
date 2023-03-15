"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createBook_1 = require("../controllers/createBook");
const createCategory_1 = require("../controllers/createCategory");
const get_books_1 = require("../controllers/get-books");
const get_categories_1 = require("../controllers/get-categories");
const multer_1 = __importDefault(require("multer"));
const firebase_1 = require("../services/firebase");
const router = (0, express_1.Router)();
exports.router = router;
const Multer = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
//create
router.post("/create-book", Multer.single("image"), firebase_1.uploadImage, new createBook_1.CreateBookController().execute);
router.post("/create-category", new createCategory_1.CreateCategoryController().execute);
//get Data
router.get("/get-books", new get_books_1.GetBookController().execute);
router.get("/get-categories", new get_categories_1.GetCategoriesController().execute);
