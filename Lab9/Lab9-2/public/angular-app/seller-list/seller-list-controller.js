angular.module("carSeller").
controller("SellersController", SellersController);

function SellersController(SellerDataFactory){
    var vm = this;
    vm.companyName = "MEAN Sellers App";

    SellerDataFactory.getAllSellers()
        .then(function(response){
            vm.sellers = response;
        });

        vm.postOneSeller = function () {
            var postData = {
                companyName: vm.newSellerCompanyName,
                address: vm.newSellerAddress,
                
                
            };
      console.log(postData)
            if (vm.SellerForm.$valid) {
                SellerDataFactory.postOneSeller(postData).then(function (response) {
                    console.log("seller has been saved");
                  
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                vm.isSubmitted = true;
            }
        };


}
