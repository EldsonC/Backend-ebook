import { Router } from "express";
import { GetBookController } from "../controllers/getBook";


import multer from "multer";
import { uploadImage } from "../services/firebase";

const router = Router()

const Multer = multer({
    storage: multer.memoryStorage(),
})

//get Data
router.get("/get-book", new GetBookController().execute)

export { router }