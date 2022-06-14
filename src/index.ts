import express from "express";
import path from "path";
import resizeImage from "./utilites/resizeImage";

const app = express();
const port = 3000;

app.get("/api/image", async (req, res) => {
    const imageUrl = req.query.url;
    const width = req.query.width as string;
    const height = req.query.height as string;

    await resizeImage.resizeImage(imageUrl as string, width, height);

    const options = {
        root: path.join(__dirname, "../assets/cache"),
        dotfiles: 'deny',
        headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
        }
    }

    res.sendFile(`${imageUrl}_${width}_${height}.jpg`, options, (err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
    // res.send(`<img src=${req.protocol}://${req.get('host')}${req.originalUrl}>`);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
