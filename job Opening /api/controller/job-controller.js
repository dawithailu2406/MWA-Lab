var mongoose = require("mongoose");
var Job = mongoose.model("Jobs");

module.exports.getAllJobOpening = function (req, res) {
    console.log("i am at the getAllJobOpening")
    var offset = 0;
    var count = 5;
    Job.find().skip(offset).limit(count).exec(function (err, jobs) {
        var response = {
            status: 200,
            message: jobs
        }
        if (err) {
            response.status = 500,
                response.message = err
        }
        res.status(response.status).json(response.message)
    })
}
module.exports.addoneJob = function (req, res) {
    if (req.body) {
        Job.create({
            title: req.body.title,
            salary: parseFloat(req.body.salary),
            exprerience: parseInt(req.body.year),
            skill: req.body.skill,
            postDate: Date.now(),
            description: req.body.description,
            location: {}
        }, function (err, jobs) {
            var response = {
                status: 200,
                message: jobs
            }
            if (err) {
                response.status = 500,
                    response.message = err
            } else { res.status(response.status).json(jobs); }
            res.status(response.status).json(response.message)
        })
    } else {
        res.status(404).json({ "message": "The body is empty, you have to fill the input" });
    }
}

module.exports.getOneJob = function (req, res) {
    console.log("i am at the getOneJob");
    var jobId = req.params.jobId;
    console.log("i am at the and jobId is " + jobId);

    Job.findById(jobId).exec(function (err, job) {
        var response = {
            status: 201,
            message: job
        }
        if (err) {
            response.status = 500,
                response.message = err
        } else if (!job) {
            response.status = 404,
                response.message = { "message": "There is no job with this id" }
        }
        res.status(response.status).json(response.message);

    })
}
module.exports.deleteOneJob = function (req, res) {
    console.log("i am at the delete controller");
    var jobId = req.params.jobId;

    Job.findByIdAndRemove(jobId).exec(function (err, deletedjob) {
        var response = {
            status: 200,
            message: deletedjob
        }
        if (err) {
            response.status = 500,
                response.message = err
        } else if (!deletedjob) {
            response.status = 404,
                response.message = { "message": "There is no job with this id" }
        }
        res.status(response.status).json(response.message);
    })
}


module.exports.updateOneJob = function (req, res) {
    var jobId = req.params.jobId;
    console.log(jobId)
    Job.findById(jobId).select("-location").exec(
        function (err, job) {
            var response = {
                status: 204,
                message: job
            }
            if (err) {
                console.log("Error finding job", err);
                response.status = 500;
                response.message = err;
            } else if (!job) {
                response.status = 404;
                response.message = { "message": "job ID not found" };
            }
            if (response.status !== 204) {
                res.status(response.status).json(response.message);
            }
            else {
                job.title = req.body.title;
                job.salary = parseFloat(req.body.salary);
                job.exprerience = parseInt(req.body.year);
                job.skill = req.body.skill;
                job.postDate = Date.now();
                job.description = req.body.description;
                job.save(function (err, jobUpdated) {
                    var respons = {
                        status: 200,
                        message: jobUpdated
                    }
                    if (err) {
                        console.log("Error finding job", err);
                        response.status = 500;
                        response.message = err;
                    }

                    res.status(respons.status).json(respons.message)
                })
            }
        })
};






