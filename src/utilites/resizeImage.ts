import sharp from "sharp";
import path from "path";

interface ImageFile {
    format: string;
    width: number;
    height: number;
    channels: number;
    premultiplied: boolean;
    size: number;
}

const resizeImage = async (url: string, width: string, height: string): Promise<ImageFile> => {
    // const fileName = "./../../assets/images" + url;
    let returnFile: ImageFile = {
        format: "",
        width: 0,
        height: 0,
        channels: 0,
        premultiplied: true,
        size: 0
    };

    await sharp(path.join(__dirname, `../../assets/images/${url}.jpg`))
        .resize(+width as number, +height as number)
        // .toFile(url + "_" + width as string + "_" + height as string,
        .toFile(
            path.join(
                __dirname,
                `../../assets/cache/${url}_${width}_${height}.jpg`
            )
        )
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
};

export default {
    resizeImage,
};
