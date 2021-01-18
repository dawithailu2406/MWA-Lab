const express = require("express");
require("./api/data/db.js");
var bodyParser = require("body-parser");
var routes = require("./api/routers")
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.set("port", 8080);
app.use(function (req, res, next) {
    console.log(req.body, res.url);
    next();
})

app.use("/api", routes); 
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
})