var express = require("express");
var router = express.Router();

var controllerGames = require("../controllers/games-controllers");
var controllerPublishers = require("../controllers/publisher-controllers");


router.route("/games").
get(controllerGames.gamesGetAll).
post(controllerGames.gamesAddOne);


router.route("/games/:gameId").
get(controllerGames.gamesGetOne).
put(controllerGames.gamesUpdateOne).
delete(controllerGames.gamesDeleteOne);


router.route("/games/:gameId/publisher")
.get(controllerPublishers.publisherGet)
.post(controllerPublishers.publisherAdd)
.put(controllerPublishers.publisherUpdate)
.delete(controllerPublishers.publisherDelete)
;

module.exports = router;