import express from 'express';
import { checkIfImageFullExists, checkIfImageThumbnailExists } from '../utils/imageResizeCheck';
import imagesRoutes from './api/images';

const routes = express.Router();

routes.use("/images", checkIfImageFullExists, checkIfImageThumbnailExists, imagesRoutes);

export default routes;