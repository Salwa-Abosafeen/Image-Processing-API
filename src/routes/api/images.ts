import express, { Request, Response } from 'express';
import { ResizeResponse } from '../../models/models';
import { resizeImage } from '../../utils/imageResize';
import { logger } from '../../utils/logger';

const imagesRoutes = express.Router();

imagesRoutes.get('/', async (req: Request, res: Response) => {
  // put the logic of image resizing here

  try {
    const requestWidth = parseInt(req.query.width as unknown as string);
    const requestHeight = parseInt(req.query.height as unknown as string);

    const imageRes: ResizeResponse = await resizeImage(
      res.locals.filename,
      requestWidth,
      requestHeight,
      res.locals.isFileExists
    );

    if (imageRes.status === 200) {
      return res.status(200).sendFile(imageRes.path);
    } else {
      return res.status(400).sendFile(imageRes.error);
    }
  } catch (e: unknown | Error) {
    return res.status(400).json({
      message: logger(e as Error),
    });
  }
});

export default imagesRoutes;
