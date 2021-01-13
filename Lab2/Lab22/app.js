const express=require("express");
const routes= require("./api/route");
const app=express();
app.set("port",9090);
app.use("/lab2",routes);
const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("Listening to port "+port);
})