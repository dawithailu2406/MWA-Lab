angular.module("meanGames").
    controller("GamesController", GamesController);

function GamesController(GameDataFactory) {
    var vm = this;
    vm.title = "MEAN Games App";

    GameDataFactory.getAllGames()
        .then(function (response) {
            vm.games = response;
        });
    



    vm.postGame = function () {
        var postData = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            rate: vm.newGameRating,
            year: vm.newGameYear,
            rating: vm.newGameRating,
            minPlayers: vm.newGameMinPlayers,
            maxPlayers: vm.newGameMaxPlayers,
            minAge: vm.newGameMinAge,
            designers: vm.newGameDesigner,
        };
  console.log(postData)
        if (vm.gameForm.$valid) {
            GameDataFactory.postGame(postData).then(function (response) {
                console.log("Game saved");
                //
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            vm.isSubmitted = true;
        }
    };



vm.isLoggedIn = function () {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };
}






// function GamesController($http) {
//     var vm= this;
//     vm.title= "Mean Games App";
//     $http.get("/api/games").
//     then(function(response){
//     vm.games= response;
//     })
// }
