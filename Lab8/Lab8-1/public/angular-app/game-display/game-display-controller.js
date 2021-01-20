angular.module("meanGames").
controller("GameController", GameController);

function _getStarRating(stars){
    return new Array(stars);
}

function GameController($routeParams, GameDataFactory){
   console.log("djfkdjfkd") 
   var vm = this;
    vm.title = "MEAN Games App";

    var id = $routeParams.id;

    GameDataFactory.getOneGame(id)
        .then(function(response){
            vm.game = response;
            vm.rating = _getStarRating(response.rate);
    });
}

// function _ getStarRating (stars)
// return new Array(rate);


// angular.module("meanGames").
// controller("GameController", GameController);

// function GameController(GameDataFactory, $routeParams) {
// var vm= this;
// var id= $routeParams.id;
// GameDataFactory.getOneGame(id).
// then(function(response) {
// vm.game= response;

//vm.rating = response.rate
// })
// }

// vm.rating= _getStarRating(response.rate);
// function _ getStarRating (stars)
// return new Array(rate);

