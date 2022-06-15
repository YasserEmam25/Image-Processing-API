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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const req = (0, supertest_1.default)(index_1.default.app);
describe('Resize Image Module', () => {
    it("request an image in cache", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get(`/api/image/?url=sans&width=500&height=400`);
        expect(res.status).toEqual(200);
    }));
    it("request an image not in cache but in the images and needs resize", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get(`/api/image/?url=sans&width=1200&height=800`);
        expect(res.status).toEqual(200);
    }));
    it("request an image not in storage", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get(`/api/image/?url=adsfkljlakdsjf&width=500&height=400`);
        expect(res.status).toEqual(200);
    }));
});
