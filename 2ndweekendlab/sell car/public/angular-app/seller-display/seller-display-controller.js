angular.module("seller").controller("SellerController", SellerController);

// function _getStarRating(stars){
//     return new Array(stars);
// }

function SellerController($routeParams, SellerDataFactory){
   
   var vm = this;
    vm.companyName = " Car Seller App";

    var id = $routeParams.id;

    SellerDataFactory.getOneSeller(id)
        .then(function(response){
            vm.seller = response;
            //vm.rating = _getStarRating(response.rate);
    });
}

// function _ getStarRating (stars)
// return new Array(rate);


