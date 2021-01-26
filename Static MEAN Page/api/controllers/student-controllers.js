var express=require("express");
var path =require("path")





var dispatchPage=function(pageName,res){
    console.log("request students index page")
    var response={
        status:200,
        message:"Index page"
    }
    res.status(response.status).sendFile(path.join(__dirname,"..","..","public","student",pageName+".html"))

}

module.exports.studentForm=function(req,res){
    dispatchPage("home",res);

};
module.exports.studentRemove=function(req,res){
    dispatchPage("remove",res);

};


module.exports.createStudent=function(req,res){
    dispatchPage("student",res)

}

module.exports.studentList=function(req,res){
    dispatchPage("list",res)

}


module.exports.loginStudent=function(req,res){
    dispatchPage("login",res)

}
