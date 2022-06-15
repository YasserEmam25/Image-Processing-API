import resizeImage from '../../utilites/resizeImage';

interface ImageFile {
    format: string;
    width: number;
    height: number;
    channels: number;
    premultiplied: boolean;
    size: number;
}

describe('Resize Image Module', () => {
    let file: ImageFile;

    beforeAll(async() => {
        file = await resizeImage.resizeImage("naruto", "400", "500");
    })

    it("should resize the image", async() => {
        expect(file).toEqual(jasmine.objectContaining({
            width: 400,
            height: 500,
        }))
    });
})