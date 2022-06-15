"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const resizeImage_1 = __importDefault(require("./utilites/resizeImage"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/api/image", (req, res) => {
    // get the paramaters from the get request url
    const imageUrl = req.query.url;
    const width = req.query.width;
    const height = req.query.height;
    // an object to help in sending image
    const options = {
        root: path_1.default.join(__dirname, "../assets/cache"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
        },
    };
    // check if the image is in the cache or not
    fs.promises
        .access(path_1.default.join(__dirname, `../assets/cache/sans.jpg`), fs.constants.F_OK)
        .then(() => {
        // return the image in cache
        res.sendFile(`${imageUrl}_${width}_${height}.jpg`, options);
        console.log("Image found in cache");
    })
        // if not in the cache, get it from the disk and resize it
        .catch(() => {
        fs.promises
            .access(path_1.default.join(__dirname, `../assets/images/`), fs.constants.F_OK)
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield resizeImage_1.default.resizeImage(imageUrl, width, height);
            // return the image in cache
            res.sendFile(`${imageUrl}_${width}_${height}.jpg`, options);
            console.log("Image resized and sent");
        }))
            // if the image is not in the disk
            .catch(() => {
            res.send("Error: Image not found");
            console.log("Error: Image not found in the files");
        });
    });
});
app.listen(port, () => console.log(`Listening on port: ${port}`));
exports.default = {
    app
};
