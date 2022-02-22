"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesRoutes = express_1.default.Router();
imagesRoutes.get("/", function (req, res) {
    // put the logic of image resizing here
    res.send("Calling the images route.");
});
exports.default = imagesRoutes;
