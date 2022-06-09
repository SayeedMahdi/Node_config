const userModel = require("../models/user");
const login =  (req, res) => {
    const { name } = req.body;
    if (name) {
      res.status(200).send(`wellcome ${name}`);
    } else {
      res.status(400).send("bad request");
    }
  }
  module.exports = login;