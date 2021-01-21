 var mongoose = require("mongoose");

// var reviewSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: false
//     },
//     rating: {
//         type: Number,
//         min: 0,
//         max: 5,
//         required: true
//     },
//     review: {
//         type: String,
//         required: true
//     },
//     createdOn: {
//         type: Date,
//         "default": Date.Now
//     }
// });



var publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
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
    year:Number,

    maxPlayer: Number,
    
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    },

    
    publisher: publisherSchema
});


mongoose.model("Game", gameSchema, "games");





