
var express = require("express");

var path = require("path");

var app = express();
var routes = require("./api/routes");

app.set("port", 8080);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});




app.use(express.static(path.join(__dirname, "public")));
app.use("/api",routes);
const server = app.listen(app.get("port"), function () {
  var port = server.address().port;
  console.log("Listnening to port" + port);
});
