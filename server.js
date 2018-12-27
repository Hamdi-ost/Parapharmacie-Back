var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var morgan = require("morgan");
var mongoose = require("mongoose");
var router = express.Router();
var appRoutes = require("./app/routes/api")(router);
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};

//Middleware (the order is important)
app.use(cors(corsOptions));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan("dev")); //log each request made
app.use(express.static(__dirname + "/public")); // the frontend will have access to the public folder
app.use("/api", appRoutes);

mongoose.connect(
  "mongodb://localhost:27017/meanStack",
  err => {
    if (err) {
      console.log("Not connected to the Database " + err);
    } else {
      console.log("Connected to the Database");
    }
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/app/views/index.htm"));
});

//use 3000 port or use what ever the server use
app.listen(port, () => {
  console.log("Listening on port " + port);
});
