


angular.module("meanGames").directive("gameRating", GameRating); 

function GameRating(){
    return {
        restrict: "E", 
        templateUrl : "angular-app/game-rating/rating.html",
        bindToController: true,
        controller: "GameController",
        controllerAs: "vm",
        scope: {
            start: "@"
        }
    }
}


// angular.module("meanGames").component("gameRating"
//     , {
//         bindings: {
//             stars: "*"
//         },
//         templateUrl: "angular-app/game-rating/rating.html",
//         controller: " GameController",
//         controllerAs: "vm"
//     })