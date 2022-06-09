const userModel = require("../models/user");
const log = async(req, res) => {
    console.log("sjdksjdkfj");
    const users =await userModel.find({});
    res.status(200).send({users});
  };

const create = async(req, res) => {
  const name = req.body.name;
    const user=await userModel.create({name});
    res.status(201).send({  user });
  }

  module.exports ={
      log,
      create
  }