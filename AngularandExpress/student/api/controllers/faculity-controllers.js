var express=require("express");
var path =require("path")





var dispatchPage=function(pageName,res){
    console.log("request students index page")

    var response={
        status:200,
        message:"Index page"
    }
    res.status(response.status).sendFile(path.join(__dirname,"..","..","public/faculity/",pageName+".html"))

}

module.exports.getFaculity=function(req,res){
    dispatchPage("index",res);

};

module.exports.deleteAndEdit=function(req,res){
    dispatchPage("faculity",res)

 }
 module.exports.qRread=function(req,res){
     dispatchPage("codeqr",res)

 }

 module.exports.scanningQR=function(req,res){
    dispatchPage("scanning",res)

}
