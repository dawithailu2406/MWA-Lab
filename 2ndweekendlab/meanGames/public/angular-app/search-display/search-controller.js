angular.module("meanGames").
controller("GameSearchController", GameSearchController);

function _getStarRating(stars){
    return new Array(stars);
}

function GameSearchController($routeParams, GameDataFactory){
   var vm = this;
    vm.title = "MEAN Games App";

    var title = $routeParams.title;

    GameDataFactory.getOneGame(title)
        .then(function(response){
            vm.game = response;
            //vm.rating = _getStarRating(response.rate);
    });   
}