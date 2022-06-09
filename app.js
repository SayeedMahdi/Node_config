const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorMiddle");
const router = require("./router");
const DB = require("./Database/db");

require("dotenv").config();
// app.use(express.static("./navbar-app"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(errorHandler.errMiddle);

app.use("/api/v1/", router);
//we used to read a file manully
// const { createReadStream } = require("fs");

//get data
const mongoose_URI = process.env.URL;
const port = process.env.PORT;
const start = async () => {
  try {
    await DB(mongoose_URI);
    app.listen(port, console.log(`app is listening in port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
// const start = async() => {
//   try {
//     const con= connectDB(mongooseUrl);
//     if(con){

//     }else{
//         throw new Error("some thing went wrong")
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// };
start();
