var express=require("express");
var routes= require("./api/route");
var app=express();
app.set("port",5000);
app.use("/",routes);
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
});