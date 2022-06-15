import express from "express";
import path from "path";
import * as fs from "fs";
import resizeImage from "./utilites/resizeImage";

const app = express();
const port = 3000;

app.get("/api/image", (req, res) => {
    // get the paramaters from the get request url
    const imageUrl = req.query.url;
    const width = req.query.width as string;
    const height = req.query.height as string;

    // an object to help in sending image
    const options = {
        root: path.join(__dirname, "../assets/cache"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
        },
    };

    // check if the image is in the cache or not
    fs.promises
        .access(
            path.join(__dirname, `../assets/cache/${imageUrl}.jpg`),
            fs.constants.F_OK
        )
        .then(() => {
            // return the image in cache
            res.sendFile(`${imageUrl}_${width}_${height}.jpg`, options);
            console.log("Image found in cache");
        })
        // if not in the cache, get it from the disk and resize it
        .catch(() => {
            fs.promises
                .access(
                    path.join(__dirname, `../assets/images/${imageUrl}.jpg`),
                    fs.constants.F_OK
                )
                .then(async () => {
                    await resizeImage.resizeImage(
                        imageUrl as string,
                        width,
                        height
                    );

                    // return the image in cache
                    res.sendFile(`${imageUrl}_${width}_${height}.jpg`, options);

                    console.log("Image resized and sent");
                })
                // if the image is not in the disk
                .catch(() => {
                    res.send("Error: Image not found");

                    console.log("Error: Image not found in the files");
                });
        });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

export default {
    app,
};
