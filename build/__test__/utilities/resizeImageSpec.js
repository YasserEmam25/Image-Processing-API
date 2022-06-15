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
const resizeImage_1 = __importDefault(require("../../utilites/resizeImage"));
describe("Resize Image Module", () => {
    let file;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        file = yield resizeImage_1.default.resizeImage("naruto", "400", "500");
    }));
    it("should resize the image", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(file).toEqual(jasmine.objectContaining({
            width: 400,
            height: 500,
        }));
    }));
});
