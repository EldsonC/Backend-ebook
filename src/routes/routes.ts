import { Router } from "express";
import { CreateBookController } from "../controllers/createBook";
import { CreateCategoryController } from "../controllers/createCategory";
import { GetBookController } from "../controllers/get-books";
import { GetCategoriesController } from "../controllers/get-categories";

import multer from "multer";
import { uploadImage } from "../services/firebase";

const router = Router()

const Multer = multer({
    storage: multer.memoryStorage(),
})

//create
router.post("/create-book", Multer.single("image"), uploadImage, new CreateBookController().execute)
router.post("/create-category", new CreateCategoryController().execute)

//get Data
router.get("/get-books", new GetBookController().execute)
router.get("/get-categories", new GetCategoriesController().execute)

export { router }