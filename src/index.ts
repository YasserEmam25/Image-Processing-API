import express from "express";
import path from "path";
import resizeImage from "./utilites/resizeImage";

const app = express();
const port = 3000;

app.get("/api/image", (req, res) => {
    // get the paramaters from the get request url
    const imageUrl = req.query.url;
    const width = req.query.width as string;
    const height = req.query.height as string;

    // check if image is in cache or not
    // if so, return it to user, else add it to cache then show it to user
    

    // an object to help in sending image
    const options = {
        root: path.join(__dirname, "../assets/cache"),
        dotfiles: 'deny',
        headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
        }
    }

    // return the image in cache
    res.sendFile(`${imageUrl}_${width}_${height}.jpg`, options, async (err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
    // res.send(`<img src=${req.protocol}://${req.get('host')}${req.originalUrl}>`);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
