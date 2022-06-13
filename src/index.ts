import express from 'express';
import resizeImage from './utilites/resizeImage';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const imageUrl = req.query.image;
    const width: unknown = req.query.width;
    const height: unknown = req.query.height;


    resizeImage(imageUrl, width, height);

       

    res.send("managing Image");
})


app.listen(port, () => console.log(`Listening on port: ${port}`));
