var express= require("express");

var router= express.Router();

var studentController =require("../controllers/students-controller.js");

var addressController=require("../controllers/address-controller.js");

router.route("/students").get(studentController.studentsGetAll);

router.route("/students/:studentId").get(studentController.studentGetOne);

router.route("/students/:studentId/addresses").get(addressController.addressGetAll);

router.route("/students/:studentId/addresses/:addressId").get(addressController.addressGetOne);

module.exports=router;