import express, { Request, Response } from 'express';

const imagesRoutes = express.Router();

imagesRoutes.get("/", (req: Request, res: Response)=> {
    // put the logic of image resizing here
    res.send("Calling the images route.")
})

export default imagesRoutes;

