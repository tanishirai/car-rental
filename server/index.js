import express from "express";
import ENV from "./env/env.js"

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.listen(ENV.PORT, () => {
    console.log(`Server is runnning on port : ${ENV.PORT}`);
});