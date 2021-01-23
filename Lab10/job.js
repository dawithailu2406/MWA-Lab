var express=require("express");
require("./api/data/db");
var path=require("path");
var router=require("./api/router");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.set("port",8080);
app.use(function(req,res,next){
    console.log(req.method,req.url);
     next();
});
app.use(express.static(path.join(__dirname,"public")));
app.use(("/node_modules",express.static(path.join(__dirname,"node_modules"))));
app.use(bodyParser.json());
app.use("/api",router)
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("the application is running at the"+port)
})
