angular.module("seller").
    controller("DeleteSellerController", DeleteSellerController);

function DeleteSellerController($routeParams,SellerDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    
    SellerDataFactory.deleteOneSeller(id)
        .then(function (response) {
            //vm.deleteGames = response;
            vm.deleteSeller= response;

        });
    }
