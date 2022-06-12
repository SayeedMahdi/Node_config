
const fs = require("fs");

// const user = {
//     username  :"mahdi",
//     password  :"lkjsdklfj"
// };
// const jsonUser= JSON.stringify(user);
// fs.writeFileSync("json1.json",jsonUser);

// const buffer= fs.readFileSync("json1.json");
// var userPars = buffer.toString();
// userPars =JSON.parse(userPars);

// console.log(userPars.username);
//Making changes to Existing file 
let data = fs.readFileSync("json1.json");
data = data.toString();
data = JSON.parse(data);
data.name = "mahdi";
data.age = 20;
data.planet = "orber";
console.log(data);
fs.writeFileSync("json1.json",JSON.stringify(data));