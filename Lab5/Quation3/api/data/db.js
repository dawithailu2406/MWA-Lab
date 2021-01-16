
var mongoose = require("mongoose");
require("./games-model.js");

const dbName = "meanGames";

const dbURL = "mongodb://localhost:27017/" + dbName;
mongoose.connect(dbURL, {useNewUrlParser:true,useUnifiedTopology:true});



mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected");
});

mongoose.connection.on("connected", function () {
    console.log("Mongoose connected to " + dbURL);
});


mongoose.connection.on("error", function (err) {
    console.log("Mongoose connection error " + err);
});



process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by apptermination");
        process.exit(0);
    });
});


process.on("SIGTERM", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by apptermination");
        process.exit(0);
    });
});


process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by apptermination");
        process.kill(process.pid, "SIGUSR2");
    });
});