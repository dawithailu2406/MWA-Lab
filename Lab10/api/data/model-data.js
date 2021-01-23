var mongoose = require("mongoose");
var addressSchema = new mongoose.Schema({
    street: {
        type: String,
        require: true
    },
    zipCode: Number,
    city: String,
    state: String
})
var mongoose = require("mongoose");
var jonSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
    postDate: Date,
    description: String,
    expereince: Number,
    skill: [String],
    location: addressSchema
})
mongoose.model("Jobs", jonSchema, "jobs");