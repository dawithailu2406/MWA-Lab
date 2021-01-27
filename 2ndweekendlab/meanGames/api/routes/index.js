var express = require("express");
var router = express.Router();

var controllerGames = require("../controllers/games-controllers");
var controllerPublishers = require("../controllers/publisher-controllers");
var controllerUsers = require("../controllers/users-controller.js");


router.route("/games").
get(controllerGames.gamesGetAll).
post(controllerGames.gamesAddOne);

router.route("/games/search").
get(controllerGames.searchOne);


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

router.route("/users/register").
post(controllerUsers.register);

router.route("/users/login").
post(controllerUsers.login);


module.exports = router;