import express, { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import { resizeImage } from '../../utils/imageResize';

const imagesRoutes = express.Router();

imagesRoutes.get("/", async (req: Request, res: Response)=> {
    // put the logic of image resizing here

    const requestWidth = parseInt((req.query.width as unknown) as string);
    const requestHeight = parseInt((req.query.height as unknown) as string);

    const imageRes = await resizeImage(res.locals.filename, requestWidth, requestHeight, res.locals.isFileExists);

    if(imageRes.status === 200) {
        return res.status(200).sendFile(imageRes.path);
    } else {
        return res.status(400).sendFile(imageRes.error);
    }
})

export default imagesRoutes;

