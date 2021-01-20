// is going to hold application module and route
angular.module("carSeller", ["ngRoute"]).config(config);

function config($routeProvider){
    // $locationProvider.hashPrefix("");
    $routeProvider
    .when("/", {
        templateUrl: "angular-app/seller-list/sellers.html",
        controller : "SellersController",
        controllerAs: "vm"
    })
        .when("/seller/:id", {
            templateUrl: "angular-app/seller-display/seller.html",
            controller : "SellerController",
            controllerAs: "vm"
    })
}