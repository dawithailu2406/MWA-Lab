var express = require("express");
var router = express.Router();

var controllerGames = require("../controllers/games-controllers");
var controllerPublishers = require("../controllers/publisher-controllers");

var controllerReviews= require("../controllers/reviews-controller");

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


router.route("/games/:gameId/reviews")
.get(controllerReviews.reviewGetAll);

router.route("/games/:gameId/reviews/:reviewId")
.get(controllerReviews.reviewGetOne);

module.exports = router;