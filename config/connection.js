//my file to connect to mysql database

//my required file (npm)
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	//my username
	user: "root",

	//my password
	password: "AMinorC#bC2013",
	database: "burgers_db"
});
};

module.exports = connection;