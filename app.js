// const { error } = require("console");
const express = require("express");
const req = require("express/lib/request");
const app = express();
require("dotenv").config;
const { createReadStream } = require("fs");

//taking data to show in page


app.get("/", async (req, res) => {
    
    const Stream = createReadStream("./fixe.txt", "utf-8");
    Stream.on("open", () => {
        
        Stream.pipe(res)
    });
    Stream.on("error", (err) => {
        console.log(err);
        res.end(err)
    })
    
})
// app.use(express.static("./public"));

const url = process.env.PORT;
const server = app.listen(3000, console.log(`app is listening port ${url}`));
