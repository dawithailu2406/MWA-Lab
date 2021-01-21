 var mongoose = require("mongoose");

 var carSchema=new mongoose.Schema({
    name:String,
    mileage:Number,
    model:{
        type:Number,
        //"default":2020
    },
    origine:{
        type:String,
        "default":"USA"
    },
    price:{
        type:Number,
        "default":5000
    }
})

 var sellerSchema = mongoose.Schema({
    companyName: {
         type: String,
         
         "defualt":"Toyota"
     },
     address: {
         type:String,
         "defualt":"Texas"
     },
     car:carSchema
 });


 mongoose.model ("Cars", sellerSchema, "cars" );

 