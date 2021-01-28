
var express = require("express");
var router = express.Router();

var controllerStudent = require("../controllers/student-controllers");
var controllerFaculity = require("../controllers/faculity-controllers");



router.route("/students").
get(controllerStudent.studentForm);

router.route("/students/list").
get(controllerStudent.studentList);

router.route("/students/register").
get(controllerStudent.createStudent);

router.route("/students/login").
get(controllerStudent.loginStudent);

router.route("/students/remove/:studentId").
get(controllerStudent.studentRemove);

router.route("/students/:studentId/attendance").
get(controllerStudent.studentAttendance);


router.route("/faculity/attendance").
get(controllerFaculity.getAttencence);

router.route("/faculity/deleteAndEdit").
get(controllerFaculity.deleteAndEdit);

router.route("/faculity/readingQR").
get(controllerFaculity.qRread);

router.route("/faculity/scanning").
get(controllerFaculity.scanningQR);




module.exports = router;