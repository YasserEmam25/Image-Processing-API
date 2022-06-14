import express from "express";
import resizeImage from "./utilites/resizeImage";

const app = express();
const port = 3000;

app.get("/api/image", async (req, res) => {
    const imageUrl = req.query.url;
    const width = req.query.width as string;
    const height = req.query.height as string;

    await resizeImage.resizeImage(imageUrl as string, width, height);

    const options = {
        root: __dirname,
        dotfiles: 'deny',
        headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
        }
    }

    res.sendFile('sans.jpg', options, (err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
    // res.send(`<img src=${req.protocol}://${req.get('host')}${req.originalUrl}>`);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
