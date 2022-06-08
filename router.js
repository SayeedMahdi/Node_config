const express = require("express");
const router = express.Router();
const { people } = require("./data");
const middle = require("./middleware/Middleware");
const   {write}  = require("fs").promises;

router.post("/login", middle, (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`wellcome ${name}`);
  } else {
    res.status(400).send("bad request");
  }
});

//this route is for all people
router.get("/people", (req, res) => {
  res.status(200).send({ data: people });
});


//post new people
router.post("/people",async (req, res) => {                               
  const { name } = req.body;
    console.log(name);
  try {

    if (!name) {
      res.status(400);
      throw new Error("Name is not enterd");
    }
    await people.write(name);
    console.log(people);
    res.status(200).send({ data:[...people,name] });
  } catch (err) {
    res.send(err);
  }
});

router.all("*", (req, res) => {
  res
    .status(404)
    .send("Not find such file this is the palace that should be trasnlated");
});
module.exports = router;
