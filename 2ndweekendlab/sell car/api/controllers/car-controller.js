var mongoose = require("mongoose");
var Seller = mongoose.model("Cars");


module.exports.carGet = function (req, res) {
    var sellerId = req.params.sellerId;
    Seller.findById(sellerId)
        .select("car")
        .exec(function (err, seller) {
            var response = {
                status: 200,
                message: seller
            };
            if (err) {
                console.log("Error finding seller");
                response.status = 500;
                response.message = err;
            } else if (!seller) {
                response.status = 404;
                response.message = { 
                    message: "seller ID not found" };
            } else {
                response.message = seller.car ? seller.car : [];
            }
            res.status(response.status).json(response.message);
        });
};



module.exports.carAdd = function (req, res) {
    console.log("Post to add a seller");
    var sellerId = req.params.sellerId;
    Seller.findById(sellerId)
      .select("car")
      .exec(function (err, seller) {
        var response = { 
            status: 200,
             message: [] 
            };
        if (err) {
          console.log("Error finding seller");

          response.status = 500;
          response.message = err;
          
        } else if (!seller) {
          console.log("seller id not found in database", sellerId);
          response.status = 404;
          response.message = { message: "seller ID not found" };
        }
        if (seller) {
          if(!seller.car){
            seller.car={
              name:"empty",
              address:[]};
          }
          _addcar(req, res, seller);
        } else {
          res.status(response.status).json(response.message);
        }
      });
  };

  var _addcar = function (req, res, seller) {
    console.log(seller);
    seller.car.name = req.body.name;
    seller.car.mileage = parseInt(req.body.mileage);
    seller.car.model=parseInt(req.body.model);
    seller.car.price=parseInt(req.body.price)
    seller.car.origine=req.body.origine;


    ;
    seller.save(function (err, updatedseller) {
      var response = {
          status: 200,
          message: updatedseller
      };
      if (err) {
        response.status = 500;
        response.message = err;
      } else {
        response.status = 201;
        response.message = updatedseller.car;
      }
      res.status(201).json(response.message);
    });
  };



  module.exports.carUpdate = function (req, res) {
    var sellerId = req.params.sellerId;
    console.log("PUT sellerId ", sellerId);

    Seller.findById(sellerId)
      .exec(function (err, seller) {
        var response = { status: 204 ,
        message:seller};

        if (err) {
          console.log("Error finding seller");
          response.status = 500;
          response.message = err;

        } else if (!seller) {
          response.status = 404;
          response.message = { message: "seller ID not found" };
        }

        if (response.status !== 204) {
          res.status(response.status).json(response.message);
        } else {
          _updateCar(req, res, seller);
        }
      });
  };

  var _updateCar = function (req, res, seller) {
    seller.car.name = req.body.name;
    seller.car.mileage = parseInt(req.body.mileage);
    seller.car.model=parseInt(req.body.model);
    seller.car.price=parseInt(req.body.price)
    seller.car.origine=req.body.origine;
    seller.save(function (err, updateseller) {
      var response = { status: 204 ,message:updateseller};
      if (err) {
        console.log("Error finding seller");
        response.status = 500;
        response.message = err;
      }
      res.status(response.status).json(response.message);
    });
  };
  

  module.exports.carDelete = function (req, res) {
    var sellerId = req.params.sellerId;
    console.log("Deleted sellerId", sellerId);
    Seller.findById(sellerId)
      .select("-reviews")
      .exec(function (err, seller) {
        var response = { status: 204 };
        if (err) {
          console.log("Error finding seller");
          response.status = 500;
          response.message = err;
        } else if (!seller) {
          response.status = 404;
          response.message = { message: "seller ID not found" };
        }
        if (response.status !== 204) {
          res.status(response.status).json(response.message);
        } else {
          _deleteCar(req, res, seller);
        }
      });
  };

  
  var _deleteCar = function (req, res, seller) {
    seller.car.remove();
    seller.save(function (err, seller) {
      var response = { status: 200,
    message:seller };
      if (err) {
        console.log("Error finding seller");
        response.status = 500;
        response.message = err;
      }
      res.status(response.status).json(response.message);
    });
  };
  
