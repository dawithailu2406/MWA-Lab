const mongoose = require("mongoose");
const Game = mongoose.model("Game");

//const { off } = require("process");
const ObjectId = require("mongodb").ObjectId;
// const dbConnection = require("../data/dbconnection");


module.exports.gamesGetAll = function (req, res) {
    // console.log("get all games");
    // console.log(req.query);
    var offset = 0;
    var count = 5;

    const maxCount = 10;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    };

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    };
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString Offset and Count should be numbers" });
        return;
    }
    if (count > maxCount) {
        res.status(400).json({ "message": "Cannot exceed count of " + maxCount });
        return;
    };

    console.log(count);


    Game.find().skip(offset).limit(count).exec(function (err, games) {
        if (err) {
            console.log("Error finding games");
            res.status(500).json(err);
        } else {
            console.log("Found games", games.length);
            res.status(200).json(games);
        };
    });
};

module.exports.gamesGetOne = function(req, res) {
    console.log("post to find");
    

    console.log("post to find");

    var gameId = req.params.gameId;

    Game.findById(gameId).exec(function (err, games) {
        var response= {
            status: 200,
            message: games
        }
        if (err) {
            console.log("Error finding game",err);
            response.status=500;
            response.message= err;

        }else if(!games) {
            response.status=404;
            response.message= {"message" : "Game ID not found"};
            } 
            //else{
        // console.log("Get game with gameId: ", gameId);
        // res.status(200).json(game);
        // };
        res.status(response.status).json(response.message);
    })
};



