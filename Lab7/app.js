angular.module("myProperApp", ['ngRoute']).
config(config);

function config($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "controller/main/main.html",
        controller: "MainController",
        controllerAs: "mainCtrl"
    }).
    when("/countries", {
        templateUrl: "controller/joke/joke.html",
        controller: "JokeController",
        controllerAs: "jokeCtrl"
    })
    .when("/about", {
        templateUrl: "controller/about/about.html",
        controller: "AboutController",
        controllerAs: "aboutCtrl"
    })

    .otherwise({
        redirectTo: "/"
    });
}