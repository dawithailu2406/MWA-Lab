angular.module("jobApp",["ngRoute"]).config(config);
function config($routeProvider){
 $routeProvider
    .when("/",{
        templateUrl:"angular-app/job-list/jobs.html",
        controller:"jobsController",
        controllerAs:"vm"
    }).when("/job/:id",{
        templateUrl:"angular-app/job-display/job.html",
        controller:"JobController",
        controllerAs:"vm"
    }).when("/delete/job/:id",{
        templateUrl:"angular-app/job-delete/job-delete.html",
        controller:"DeleteJobController",
        controllerAs:"vm"
    })
}
