const express= require("express");
const router= express.Router();
const Sum =require("../controllers/controllerOfSum.js");
router.route("/:num1/add").get(Sum.sumNumber);
module.exports=router