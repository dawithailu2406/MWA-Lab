require("./api/data/db");
const bodyParser=require("body-parser");
var express=require("express");

var path=require("path");
var routes=require("./api/routes");

//const _ = require("angular-route");

var app=express();

app.set("port",5000);



app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname,"public")));


//app.use(express.static(path.join(__dirname,"public")));
//app.use(express.static(path.join(__dirname,"public")));
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")))


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api",routes);

const server =app.listen(app.get("port"),function(){
    var port= server.address().port;
    console.log("Listnening to port" + port);

})



