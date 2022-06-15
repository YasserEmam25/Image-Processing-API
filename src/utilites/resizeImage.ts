import sharp from "sharp";
import path from "path";

const resizeImage = (url: string, width: string, height: string) => {
    // const fileName = "./../../assets/images" + url;

    sharp(path.join(__dirname, `../../assets/images/${url}.jpg`))
        .resize(+width as number, +height as number)
        // .toFile(url + "_" + width as string + "_" + height as string,
        .toFile(path.join(__dirname, `../../assets/cache/${url}_${width}_${height}.jpg`))
        .then((file) => {
            console.log('====================================');
            console.log(file);
            console.log('====================================');
        }).catch((err) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        });

    console.log(`resize image funciton ${url} ${width} ${height}`);
};

export default {
    resizeImage,
};
