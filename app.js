
const express = require("express"); 
const app = express();
const {people}= require("./data");
const middle = require("./controler");

require("dotenv").config();
// app.use(express.static("./navbar-app"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({extended:false}))
//we used to read a file manully
// const { createReadStream } = require("fs");

//taking data to show in page

// app.get("/", async (requrd, result) => {
    
//     // const Stream = createReadStream("./fixe.txt", "utf-8");
//     // Stream.on("open", () => {
        
//     //     Stream.pipe(result)
//     // });
//     // Stream.on("error", (err) => {
//     //     console.log(err);
//     //     res.end(err)
//     // });
//     res.status(200);  
    
// });
app.post("/login",middle,(req,res) =>{
    const {name} = req.body;
    if(name){
        res.status(200).send(`wellcome ${name}`)
    }else{
        res.status(400).send("bad request");
    }
})

// app.all("*", (req, res) => {
//     res.status(404).send("Not find such file this is the palace that should be trasnlated")
// })
//get data 
app.get("/api/people",(req,res) =>{
    res.status(200).send({data:people}); 
})
const url = process.env.PORT;
const server = app.listen(url , console.log(`app is listening port: ${url}`));
