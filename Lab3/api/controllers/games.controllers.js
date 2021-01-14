
const { off } = require("process");
const dbConnection = require("../data/dbconnection");


module.exports.gamesGetAll = function (req, res) {
    // console.log("get all games");
    // console.log(req.query);
    var offset = 4;
    var count = 3;

    // res.status(200).json({"jsonData":true});

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    };

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
        if (count > 7) {
            count = 7;
        }

    };
    var db = dbConnection.get();
    const collection = db.collection("games");

    collection.find().skip(offset).limit(count).toArray(function (err, docs) {
        console.log("Found games", docs);
        res.status(200).json(docs);
    });
};

// module.exports.gamesGetOne= function(req,res){
//         const db=dbConnection.get();
//         const collection=db.collection("games");
//         const gameId=req.params.ObjectId;
//     collection.findOne({_id:ObjectId(gameId)}, function(err,doc) {
//         if(err){console.log(err);
//             return;
//         };
//         console.log("Get game with gameId: ",gameId);
//         res.status(200).json(doc);
//     })
//     };
//     module.exports.gamesAddOne=function(req,res){;
//         console.log("post to add a game");
//         const db=dbConnection.get();
//         const collection=db.collection("games");
//         if(req.body &&req.body.title && req.body.price){
//         console.log(req.body);
//         res.status(201).json(res.body);
//         }
//         else{
//             console.log("data is missing ")
//             res.status(400).json({erro:"required data missing from POST"})

//         }

//         }

