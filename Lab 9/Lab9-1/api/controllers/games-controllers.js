const mongoose = require("mongoose");

const Game = mongoose.model("Game");

//const { off } = require("process");
const ObjectId = require("mongodb").ObjectId;
// const dbConnection = require("../data/dbconnection");

var runGeoQuery= function (req, res){
    const lng =parseFloat(req.query.lng);
    const lat=parseFloat(req.query.lat);
    var point = {
    type:"point",
    coordinates:[lng,lat]
};
Game.aggregate([{
    "$geoNear": {
        "near": point, 
        "spherical": true, 
        "distanceField": "distance", 
        "maxDistance": 750000,
          "$limit": 5

    }

}],
function(err, results) {
    console.log("Geo results", results);
    console.log("Geo error ", err);
    res.status(200).json(results);
    });

}
module.exports.gamesGetAll = function (req, res) {
    // console.log("get all games");
    // console.log(req.query);
    var offset = 0;
    var count = 9;

    const maxCount = 10;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    };

    if (req.query &&req.query.lat && req.query.lng) {
        runGeoQuery(req,res);
        return;
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

module.exports.gamesAddOne = function (req, res) {
    
    console.log("post to add a game");
    if (req.body ) {
        Game.create({
            title:req.body.title,
            year:parseInt(req.body.year),
            price:parseFloat(req.body.price),
            rate:parseInt(req.body.rate),
            minPlayer:parseInt(req.body.minPlayers),
            maxPlayer:parseInt(req.body.maxPlayers),
            publisher:{},// review:req.body.review,
            minAge:parseInt(req.body.minAge),
            designers:req.body.designers

        },
       
        function(err,games){
            var response= {
                status: 200,
                message: games
            }
            if (err) {
                console.log("Error finding game",err);
                response.status=500;
                response.message= err;
            }
            
            
            res.status(response.status).json(response.message);
        });
        
    }
    else {
        console.log("data is missing from POST body")
        res.status(400).json({ error: "required data missing from POST" })

    }
    
}

module.exports.gamesUpdateOne = function(req, res) {
    
    console.log("post to find   ---------00000-------090-");
    var gameId = req.params.gameId;
    console.log(gameId)

    Game.findById(gameId).select("-review -publisher").exec(
        function (err, games) {
        var response= {
            status: 204,
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
        if(response.status!==204){
            res.status(response.status).json(response.message);
        }
        else{
            games.title=req.body.title;
            games.price=parseInt(req.body.price);
            games.rate=parseFloat(req.body.rate);
            games.minPlayer=parseInt(req.body.minPlayer);
            games.maxPlayer=parseInt(req.body.maxPlayer);
         games. publisher="";
           games.review="",
            games.minAge=parseInt(req.body.minAge);
            games.designers=req.body.designers;

            games.save(function(err,gameUpdated){
                var respons= {
                    status: 200,
                    message: gameUpdated
                }

                if (err) {
                    console.log("Error finding game",err);
                    response.status=500;
                    response.message= err;
                }
                console.log("---------------------")
                console.log(respons.message)
                res.status(respons.status).json(respons.message)
            })
        }
        //res.status(response.status).json(response.message);
    })   
};




module.exports.gamesDeleteOne = function(req, res) {
    console.log("post to fin");
    var gameId = req.params.gameId;
console.log(gameId)
    Game.findByIdAndRemove(gameId).exec(function (err, deleteGames) {
        var response= {
            status: 200,
            message: deleteGames
        }
        if (err) {
            console.log("Error finding game",err);
            response.status=500;
            response.message= err;

        }else if(!deleteGames) {
            response.status=404;
            response.message= {"message" : "Game ID not found"};
            } 
            res.status(response.status).json(response.message)
            
    })

};





