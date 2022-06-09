const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
    name:{
        unique:true,
        type:String,
        require:true
    }
});
module.exports= mongoose.model("users",userModel);