angular.module("jobApp").controller("DeleteJobController", DeleteJobController);
function DeleteJobController($routeParams, DataJobFactory) {
    var id = $routeParams.id;
    var vm = this;
    DataJobFactory.deleteJob(id).then(function (response) {
        vm.deletedJob = response;
    })
}