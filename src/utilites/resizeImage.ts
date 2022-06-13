import sharp from 'sharp';


// const cacheImage = () => {

// }


const resizeImage = (url: string, width: unknown, height: unknown) => {
    const fileName = "./../../assets/images" + url;

    sharp(url)
        .resize(width as number, height as number)
        .toFile(url + '_' + width + '_' + height, (err) => {
            console.log(err);
        })
}


export default {
    resizeImage,
    // cacheImage
}