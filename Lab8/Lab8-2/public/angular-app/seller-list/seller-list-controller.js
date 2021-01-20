angular.module("carSeller").
controller("SellersController", SellersController);

function SellersController(SellerDataFactory){
    var vm = this;
    vm.companyName = "MEAN Sellers App";

    SellerDataFactory.getAllSellers()
        .then(function(response){
            vm.sellers = response;
        });
}
// function SellersController($http) {
//     var vm= this;
//     vm.title= "Mean Sellers App";
//     $http.get("/api/Sellers").
//     then(function(response){
//     vm.Sellers= response;
//     })
// }
