const result=require("./note");
console.log(result());
const fs = require("fs");
fs.appendFileSync("node.txt","\n we want to write here some something new","utf8");
const validator = require("validator")
console.log(validator.isEmail("mahdi@.com"));