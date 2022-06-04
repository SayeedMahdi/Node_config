const express = require("express");
const res = require("express/lib/response");
const app = express();

require("dotenv").config();

//we used to read a file manully
// const { createReadStream } = require("fs");

//taking data to show in page

app.get("/", async (requrd, result) => {
    
    // const Stream = createReadStream("./fixe.txt", "utf-8");
    // Stream.on("open", () => {
        
    //     Stream.pipe(result)
    // });
    // Stream.on("error", (err) => {
    //     console.log(err);
    //     res.end(err)
    // });
    res.status(200).send("Home page");    
    
});

app.all("*", (req, res) => {
    res.status(404).send("Not find such file this is the palace that should be trasnlated")
})
// app.use(express.static("./public"));

const url = process.env.PORT;
const server = app.listen(url , console.log(`app is listening port: ${url}`));
