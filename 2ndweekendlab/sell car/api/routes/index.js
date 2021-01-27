var express=require("express");
var router=express.Router();
var sellController=require("../controllers/seller-Controller");

var carController=require("../controllers/car-Controller");
var controllerUsers = require("../controllers/users-controller.js");


router.route("/seller").
get(sellController.sellersGetAll).
post(sellController.sellersAddOne);

router.route("/seller/search/:title").
get(sellController.searchOne);


router.route("/seller/:sellerId").
get(sellController.sellGetOne).
delete(sellController.sellerDeleteOne)
.put(sellController.sellerUpdateOne);

router.route("/seller/:sellerId/car").
 get(carController.carGet)
 .post(carController.carAdd)
 .put(carController.carUpdate).
 delete(carController.carDelete);


router.route("/users/register").
post(controllerUsers.register);

router.route("/users/login").
post(controllerUsers.login);



module.exports=router;
