import express from "express";
import body from "body-parser";

const app = express();
const port = 3001;

app.listen(port , () => {
    console.log(`listening on port ${port} !`);
})