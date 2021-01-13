const express=require("express");
const routes= require("./api/route");
const app=express();
app.set("port",5000);
app.use("/lab2",routes);
const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("Listening to port "+port);
})