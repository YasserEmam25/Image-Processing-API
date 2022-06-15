"use strict";
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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const resizeImage = (url, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    // const fileName = "./../../assets/images" + url;
    let returnFile = {
        format: "",
        width: 0,
        height: 0,
        channels: 0,
        premultiplied: true,
        size: 0,
    };
    yield (0, sharp_1.default)(path_1.default.join(__dirname, `../../assets/images/${url}.jpg`))
        .resize(+width, +height)
        // .toFile(url + "_" + width as string + "_" + height as string,
        .toFile(path_1.default.join(__dirname, `../../assets/cache/${url}_${width}_${height}.jpg`))
        .then((file) => {
        console.log("====================================");
        console.log(file);
        console.log("====================================");
        returnFile = file;
    })
        .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
    });
    return returnFile;
});
exports.default = {
    resizeImage,
};
