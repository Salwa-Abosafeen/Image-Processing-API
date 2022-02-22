import express, { Request, Response } from 'express';
import { join } from 'path';
import sharp from 'sharp';

const imagesRoutes = express.Router();

imagesRoutes.use(express.static("public"));

imagesRoutes.get("/", async (req: Request, res: Response)=> {
    // put the logic of image resizing here

    const filename = req.query.filename;
    const requestWidth = parseInt((req.query.width as unknown) as string);
    const requestHeight = parseInt((req.query.height as unknown) as string);

    if(res.locals.isFileExists) {
        return res.status(200).send(`<img src=/\"${res.locals.filename}\" />`)
    } else {
        // resize image
        const filePath = `./public/images/full/${filename}.jpg`;
        const fileTransform = sharp(filePath);

        fileTransform.resize({ width: requestWidth, height: requestHeight });

        // save it to thumbnail folder
        try {
            await fileTransform.toFile(`./public/images/thumbnail/${filename}-${requestWidth}-${requestHeight}.jpg`);
            return res.status(200).json({message: "Done"});
        } catch(err) {
            return res.status(400).json({message: `ERROR `});
        } 
    }

})

export default imagesRoutes;

