import sharp from "sharp";

// const cacheImage = () => {

// }

const resizeImage = (url: string, width: string, height: string) => {
    const fileName = "./../../assets/images" + url;

    sharp("sans.jpg")
        .resize(+width as number, (+height) as number)
        // .toFile(url + "_" + width as string + "_" + height as string,
        .toFile("sans2.jpg")
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
    // cacheImage
};
