import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

export const checkIfImageFullExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<unknown> => {
  // start here if the image is exists in the images/full folder go to next check
  const filename = req.query.filename;

  if (!filename) {
    return res.status(403).json({ message: 'Missing filename' });
  }

  const check = await fs.existsSync(`./public/images/full/${filename}.jpg`);

  if (!check) {
    return res.status(404).json({ message: 'File Not Exists' });
  }

  return next();
};

export const checkIfImageThumbnailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<unknown> => {
  // check if the file exists in the thumbnail folder with provided width and height
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  if (!width || !height) {
    return res.status(403).json({ message: 'Missing width or height Data' });
  }

  const check = await fs.existsSync(
    `./public/images/thumbnail/${filename}-${width}-${height}.jpg`
  );

  if (!check) {
    res.locals.isFileExists = false;
    res.locals.filename = `${filename}`;
  } else {
    res.locals.isFileExists = true;
    res.locals.filename = `${filename}-${width}-${height}`;
  }

  return next();
};
