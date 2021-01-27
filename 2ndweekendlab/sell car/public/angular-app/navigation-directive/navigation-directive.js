angular.module("seller").directive("sellersNavigation", SellersNavigation);
function SellersNavigation() {


  return {
    restrict: "E",
    templateUrl: "angular-app/navigation-directive/navigation-directive.html",
  };
}
