var express=require("express");
var router=express.Router();
var controllerJob=require("../controller/job-controller.js");
router.route("/jobs")
.get(controllerJob.getAllJobOpening)
.post(controllerJob.addoneJob);
 router.route("/job/:jobId").get(controllerJob.getOneJob)
 .delete(controllerJob.deleteOneJob)
 .put(controllerJob.updateOneJob);
module.exports=router;
