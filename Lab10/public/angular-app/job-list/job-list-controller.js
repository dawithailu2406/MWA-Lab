angular.module("jobApp").controller("jobsController", jobsController);

function jobsController(DataJobFactory) {
    var vm = this;
    vm.name = "all job Opened";
    console.log("JobsController =========");
    DataJobFactory.getallJob().then(function (response) {
        vm.jobs = response;
    })

    vm.postJob = function () {
        var postData = {
            title: vm.newJobTitle,
            salary: vm.newJobSalary,
            description: vm.newJobDescription,
            year: vm.newJobExprience,
            skill: vm.newJobSkill,

        };
        DataJobFactory.postJob(postData).then(
            function (response) {
                console.log("Game saved");

            }).catch(function (error) {
                console.log(error);
            });

    };
}