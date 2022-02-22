import path from 'path';
import sharp from 'sharp';
import { ResizeResponse } from '../models/models';

export const resizeImage = async (
  filename: string,
  width: number,
  height: number,
  isFileExists: boolean
): Promise<ResizeResponse> => {
  // resize image

  const filePath = `./public/images/full/${filename}.jpg`;
  const fileTransform = sharp(filePath);

  fileTransform.resize({ width: width, height: height });

  let imagePath = '';

  if (isFileExists) {
    imagePath = path.resolve(`./public/images/thumbnail/${filename}.jpg`);
    return new ResizeResponse(imagePath, 200, '');
  } else {
    try {
      await fileTransform.toFile(
        `./public/images/thumbnail/${filename}-${width}-${height}.jpg`
      );
      imagePath = path.resolve(
        `./public/images/thumbnail/${filename}-${width}-${height}.jpg`
      );
      return new ResizeResponse(imagePath, 200, '');
    } catch (err) {
      return new ResizeResponse('', 400, `ERROR: can't resize the image`);
    }
  }
};
