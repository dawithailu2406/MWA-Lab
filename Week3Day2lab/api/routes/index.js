
var express = require("express");
var router = express.Router();

var controllerStudent = require("../controllers/student-controllers");
var controllerFaculity = require("../controllers/faculity-controllers");



router.route("/students").
get(controllerStudent.studentForm);

router.route("/students/list").
get(controllerStudent.studentList);

router.route("/students/create").
get(controllerStudent.createStudent);

router.route("/students/login").
get(controllerStudent.loginStudent);

router.route("/students/remove").
get(controllerStudent.studentRemove);


router.route("/faculity").
get(controllerFaculity.getFaculity);

router.route("/faculity/deleteAndEdit").
get(controllerFaculity.deleteAndEdit);

router.route("/faculity/readingQR").
get(controllerFaculity.qRread);

router.route("/faculity/scanning").
get(controllerFaculity.scanningQR);




module.exports = router;