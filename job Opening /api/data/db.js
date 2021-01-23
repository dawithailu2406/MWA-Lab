var mongoose=require("mongoose");
require("./model-data.js");
var dbName="jobOpens";
var dbURL="mongodb://localhost:27017/"+dbName;
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("disconnected",function(){
    console.log("the mongodb is diconnected")
});
mongoose.connection.on("connected",function(){
    console.log("the mongodb is connected to ",dbURL)
})
mongoose.connection.on("error",function(err){
    console.log("error has has been happening"+err)
})
process.on("SIGINT",function(){
    mongoose.connection.close(function(){
    console.log("the mongodb is diconnected  by app termination ");
    process.exit(0);   
})
})
process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
    console.log("the mongodb is disconnected by the app termination");
    process.exit(0);   
})
})
    

process.once("SIGUSR2",function(){
    mongoose.connection.close(function(){
    console.log("the mongodb is diconnected");
    process.kill(process.pid,"SIGUSR2");
    
})
})
    

    


