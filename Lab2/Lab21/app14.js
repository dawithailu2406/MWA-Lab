//  var express= require("express");
// var app= express();
// const path=require("path");
// app.set("port", 5000);

// app.get("/", function(req, res) {
// console.log("GET received");
// res.status(200).send("Received your GET request.");
// });
// app.get("/json", function(req, res) {
//     console.log("JSON request received");
//     res.status(200).json({"jsonData": true});
// });
// app.get("/file",function(req,res){
//     console.log("File request received");
//     res.status(200).sendFile(path.join(__dirname,"app11.js"))
// });

// var server= app.listen(app.get("port"), function() {
// var port= server.address().port;
// console.log("Listening to port "+ port);
// });

var express= require("express");
var path= require("path");
var routes= require("./routes");
var app= express();
app.set("port", 5000);

app.use(function(req, res, next) {
console.log(req.method, req.url);
next();
});
app.use(express.static(path.join(__dirname,"public")));
app.use("/api", routes);
var server= app.listen(app.get("port"),function() {
var port= server.address().port;
console.log("Listening to port "+ port);
});