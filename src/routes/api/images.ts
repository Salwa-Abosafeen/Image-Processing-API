import express, { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';

const imagesRoutes = express.Router();

imagesRoutes.get("/", async (req: Request, res: Response)=> {
    // put the logic of image resizing here

    const filename = req.query.filename;
    const requestWidth = parseInt((req.query.width as unknown) as string);
    const requestHeight = parseInt((req.query.height as unknown) as string);

    let imagePath = '';

    if(res.locals.isFileExists) {
        imagePath = path.resolve(`./public/images/thumbnail/${res.locals.filename}.jpg`);
        return res.status(200).sendFile(imagePath)
    } else {
        // resize image
        const filePath = `./public/images/full/${filename}.jpg`;
        const fileTransform = sharp(filePath);

        fileTransform.resize({ width: requestWidth, height: requestHeight });

        // save it to thumbnail folder
        try {
            await fileTransform.toFile(`./public/images/thumbnail/${filename}-${requestWidth}-${requestHeight}.jpg`);
            imagePath = path.resolve(`./public/images/thumbnail/${filename}-${requestWidth}-${requestHeight}.jpg`);
            return res.status(200).sendFile(imagePath);
        } catch(err) {
            return res.status(400).json({message: `ERROR: can't resize the image`});
        } 
    }

})

export default imagesRoutes;

