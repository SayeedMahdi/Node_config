/** @format */

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const db = require("./database/DBConnection");

const app = express();

// db.execute("DROP TABLE product;");
// db.execute(`CREATE TABLE IF NOT EXISTS product(
//   id int AUTO_INCREMENT PRIMARY KEY,
//   title varchar(255),
//   price int,
//   description varchar(255),
//   imageUrl varchar(255)
// ) `);
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, console.log("listening on http://localhost:3000"));
