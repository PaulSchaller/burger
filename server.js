// dependencies and required files
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//set up a port
var app = express();
var port = process.env.PORT || 3000;


app.use(express.static("public"));

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});