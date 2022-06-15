import supertest from "supertest";
import app from "../index";

const req = supertest(app);

describe('Resize Image Module', () => {
    it("request an image in cache", async() => {
        const res = await req.get(`/api/image/?url=sans&width=500&height=400`);

        expect(res.status).toEqual(200);
    });

    it("request an image not in cache but in the images and needs resize", async () => {
        const res = await req.get(`/api/image/?url=sans&width=1200&height=800`);

        expect(res.status).toEqual(200);
    });

    it("request an image not in storage", async () => {
        const res = await req.get(`/api/image/?url=adslksadjf&width=500&height=400`);

        expect(res.status).toEqual(200);
    });
})