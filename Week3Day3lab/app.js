
var express = require("express");
const bodyParser=require("body-parser");
var path = require("path");

var app = express();
var routes = require("./api/routes");

app.set("port", 9090);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "public")));
app.use("/api",routes);

const server = app.listen(app.get("port"), function () {
  var port = server.address().port;
  console.log("Listnening to port" + port);
});
