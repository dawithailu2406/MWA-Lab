angular.module("jobApp").controller("JobController", JobController);
function JobController($routeParams, DataJobFactory) {
  var id = $routeParams.id;
  var vm = this;
  DataJobFactory.getOneJob(id).then(function (response) {
    vm.job = response;
  })
}