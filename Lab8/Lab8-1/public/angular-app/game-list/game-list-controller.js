angular.module("meanGames").
controller("GamesController", GamesController);

function GamesController(GameDataFactory){
    var vm = this;
    vm.title = "MEAN Games App";

    GameDataFactory.getAllGames()
        .then(function(response){
            vm.games = response;
        });
}
// function GamesController($http) {
//     var vm= this;
//     vm.title= "Mean Games App";
//     $http.get("/api/games").
//     then(function(response){
//     vm.games= response;
//     })
// }
