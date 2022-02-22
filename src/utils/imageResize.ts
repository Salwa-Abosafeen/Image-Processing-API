import path from "path";
import sharp from "sharp";


export const resizeImage = async (filename: string, width:number, height:number, isFileExists: boolean) => {
    // resize image
    
    const filePath = `./public/images/full/${filename}.jpg`;
    const fileTransform = sharp(filePath);

    fileTransform.resize({ width: width, height: height });

    let imagePath = '';

    if(isFileExists) {
        imagePath = path.resolve(`./public/images/thumbnail/${filename}.jpg`);
        return {
            path: imagePath,
            status: 200,
            error: ''
        };
    } else {
        try {
            await fileTransform.toFile(`./public/images/thumbnail/${filename}-${width}-${height}.jpg`);
            imagePath = path.resolve(`./public/images/thumbnail/${filename}-${width}-${height}.jpg`);
            return {
                path: imagePath,
                status: 200,
                error: ''
            };
        } catch(err) {
            return {
                path: '',
                status: 400,
                error:`ERROR: can't resize the image`
            };
        } 

    }
    
}