angular.module("jobApp").factory("DataJobFactory", DataJobFactory);
function DataJobFactory($http) {
    return {
        getallJob: getallJob,
        getOneJob: getOneJob,
        postJob: postJob,
        deleteJob: deleteJob,
        updateJob: updateJob
    }
    function getallJob() {
        return $http.get("/api/jobs/").then(complete).catch(failed);
    }
    function getOneJob(id) {
        return $http.get("/api/job/" + id).then(complete).catch(failed);
    }
    function postJob(job) {
        return $http.post("/api/jobs/", job).then(complete).catch(failed);
    }
    function deleteJob(id) {
        return $http.delete("/api/job/" + id).then(complete).catch(failed);
    }
    function updateJob(id) {
        return $http.delete("/api/jobs/" + id).then(complete).catch(failed)
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}