angular.module("meanGames").
    controller("DeleteGameController", DeleteGameController);

function DeleteGameController($routeParams,GameDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    
    GameDataFactory.deleteOneGame(id)
        .then(function (response) {
            //vm.deleteGames = response;
            vm.deleteGames = response;

        });
    }