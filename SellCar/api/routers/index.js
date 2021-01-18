var express=require("express");
var router=express.Router();
var sellController=require("../controllers/seller-Controller");

var carController=require("../controllers/car-Controller");


router.route("/seller").
get(sellController.sellersGetAll).
post(sellController.sellersAddOne);


router.route("/seller/:sellerId").
get(sellController.sellGetOne).
delete(sellController.sellerDeleteOne)
.put(sellController.sellerUpdateOne);

router.route("/seller/:sellerId/car").
 get(carController.carGet)
 .post(carController.carAdd)
 .put(carController.carUpdate).
 delete(carController.carDelete);

module.exports=router;
