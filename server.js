
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.

 require("./app/routing/apiRoutes.js")(app);
 require("./app/routing/htmlRoutes.js")(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });