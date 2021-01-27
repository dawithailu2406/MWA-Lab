angular.module("seller").
controller("SellerSearchController", SellerSearchController);

function _getStarRating(stars){
    return new Array(stars);
}

function SellerSearchController($routeParams, GameDataFactory){
   var vm = this;
    vm.title = "MEAN Games App";

    var title = $routeParams.title;

    GameDataFactory.getOneGame(title)
        .then(function(response){
            vm.game = response;
            //vm.rating = _getStarRating(response.rate);
    });   
}