"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResizeCheck_1 = require("../utils/imageResizeCheck");
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.default.Router();
routes.use('/images', imageResizeCheck_1.checkIfImageFullExists, imageResizeCheck_1.checkIfImageThumbnailExists, images_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map