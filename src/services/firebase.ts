import { Request, Response } from "express"

import admin from "firebase-admin"
const serviceAccount = require("../database/config/firebase-key.json")

const BUCKET = "e-book-82f8e.appspot.com"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET
});

const bucket = admin.storage().bucket()

export const uploadImage = (req:Request, res:Response, next) => {
    try {
        if(!req.file) return next();
    
        const image = req.file;
        const nomeArquivo = image.originalname.replace(/ /g, "-");
        const file = bucket.file(nomeArquivo)
        const stream = file.createWriteStream({
            metadata: {
                contentType: image.originalname
            }
        })
        stream.end(image.buffer)
        stream.on("error", (e) => {
            console.error(e)
        })
        stream.on("finish", async () => {
            await file.makePublic();
            req.file.path = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`
            next()
        })
    } catch(err) {

    }
}