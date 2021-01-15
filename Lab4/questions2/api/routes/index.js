var express = require("express");
var router = express.Router();

//var controllerGames = require("../controllers/games-controllers");
var studentController = require("../controllers/student-controllers");

//var controllerPublishers = require("../controllers/publisher-controllers");
// router.route("/games").get(controllerGames.gamesGetAll);
router.route("/students").get(studentController.gamesGetAll);

// router.route("/games/:gameId").get(controllerGames.gamesGetOne);
router.route("/students/:gameId").get(studentController.gamesGetOne);

//router.route("/games/:gameId/publishers").get(controllerPublishers.publisherGetOne);

module.exports = router;