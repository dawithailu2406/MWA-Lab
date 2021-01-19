angular.module("myProperApp")
.controller("JokeController", JokeController);

 
function JokeController($http) {
    var vm= this;
    //var jokeType= $routeParams.jokeType;
    $http.get("https://official-joke-api.appspot.com/jokes/ten")

    $http.get("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
     .then(function(response) {
    vm.countrys= response.data;
    });
    }

    //https://raw.githubusercontent.com/mledoze/countries/master/countries.json

    //function JokeController($http, $routeParams) {
        // var vm= this;
        // var jokeType= $routeParams.jokeType;
        // $http.get("https://official-jokeapi.appspot.com/jokes/"+jokeType+"/random")
        //  .then(function(response) {
        // vm.joke= response.data;
        // });
        // }