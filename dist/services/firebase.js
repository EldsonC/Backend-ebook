"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require("../database/config/firebase-key.json");
const BUCKET = "e-book-82f8e.appspot.com";
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    storageBucket: BUCKET
});
const bucket = firebase_admin_1.default.storage().bucket();
const uploadImage = (req, res, next) => {
    try {
        if (!req.file)
            return next();
        const image = req.file;
        const nomeArquivo = image.originalname.replace(/ /g, "-");
        const file = bucket.file(nomeArquivo);
        const stream = file.createWriteStream({
            metadata: {
                contentType: image.originalname
            }
        });
        stream.end(image.buffer);
        stream.on("error", (e) => {
            console.error(e);
        });
        stream.on("finish", async () => {
            await file.makePublic();
            req.file.path = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;
            next();
        });
    }
    catch (err) {
    }
};
exports.uploadImage = uploadImage;
