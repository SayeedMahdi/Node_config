const express = require("express");
const router = express.Router();
const middle = require("./middleware/Middleware");
const loginControler = require("./controller/login")
const {log,create }=require("./controller/userControler");
router.post("/login", middle,loginControler);

//this route is for all people
// router.get("/people", (req, res) => {
//   res.status(200).send({ data: people });
// });


//post new people
router.route("/people").get(log).post(create);

// router.all("*", (req, res) => {
//   res
//     .status(404)
//     .send("Not find such file this is the palace that should be trasnlated");
// });
module.exports = router;
