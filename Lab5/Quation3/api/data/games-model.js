var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.Now
    }
});



var publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // coordinates: {
    //     type: Number,
    //     required: false
    // },
    // established: {
    //     type: Number,
    //     required: false
    // },
    
    location: {
        address: String,
        // Store coordinates in order longitude (E/W), latitude (N/S)
        coordinates: {
        type: [String],
        
        required:false
        }
    }
})


var gameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: Number,
    designers: String,
    minPlayer: Number,

    maxPlayer: Number,
    
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    }

    , reviews: [reviewSchema],
    publisher: publisherSchema
});


mongoose.model("Game", gameSchema, "games");





// var mongoose=require("mongoose");
// var addressSchema=new mongoose.Schema({
//     _id:Number,
//     street:String,
//     city:String,
//     state:{
//         type:String,
//         length:2
//     },
//     zipcode:{
//         type:Number,
//         length:5
//     }
// })


// var studentSchema=mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     gpa:{
//         type:Number,
//         min:0,
//         max:4
//     },
//     address:[addressSchema]

// })
// mongoose.model("Student",studentSchema,"student");