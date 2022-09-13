/** @format */

const mysql = require("mysql2");
const pool = mysql.createPool({
	host: "192.168.157.203",
	user: "mahdi",
	database: "im",
	password: "mahdi",
	port: "3306",
	waitForConnections: true,
});

module.exports = pool.promise();
