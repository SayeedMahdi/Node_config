const express = require("express");
const req = require("express/lib/request");
const app = express();
require("dotenv").config;


app.get("/", (req, res) => {
    res.send(req.ips);
})
// app.use(express.static("./public"));

const url = process.env.PORT;
const server = app.listen(3000, console.log(`app is listening port ${url}`));
