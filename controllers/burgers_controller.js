//required files and npm
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// router to get mysql database entries in burgers database
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//router to insert a burger entry into mysql burgers database
router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    //once entry is inserted, redirect the webpage to print
    //  the updated lists to the screen
    res.redirect('/');
  });
});

router.post("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    completed: true
  }, condition, function(result) {
    //once entry is changed, redirect the webpage to print
    //  the updated lists to the screen
     res.redirect('/');
  });
});

// Export routes 
module.exports = router;