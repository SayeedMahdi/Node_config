
const express = require("express"); 
const app = express();
const errorHandler = require("./middleware/errorMiddle");
const router = require("./router");


require("dotenv").config();
// app.use(express.static("./navbar-app"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(errorHandler.errMiddle);
app.use("/api/v1",router);
//we used to read a file manully
// const { createReadStream } = require("fs");



//get data 
const url = process.env.PORT;
const server = app.listen(url , console.log(`app is listening port: ${url}`));
