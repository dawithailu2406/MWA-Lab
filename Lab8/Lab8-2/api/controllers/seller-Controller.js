var mongoose = require("mongoose");
var Seller = mongoose.model("Cars");

module.exports.sellersGetAll = function (req, res) {
  var offset = 0;
  var count = 9; 
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (count > 11) {
    count = 9;
  }
  if (isNaN(offset) || isNaN(count)) {
    res.status(400).json({ message: "QueryString Offset and Count shoulb be numbers" });
    return;
  }

  Seller.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, sellers) {

      var response={
        status:404,
        massage:sellers
      }
      if (err) {
        console.log("Found Sellers", sellers.length);
        res.status(500).json(err);
      } else {
        console.log("Found Sellers", sellers.length);
        res.json(sellers);
      }
      res.status(response.status).json(response.message);
    });
};


module.exports.sellGetOne = function (req, res) {

  var sellerId = req.params.sellerId;
  console.log(sellerId);
  Seller.findById(sellerId).exec(function (err, seller) {
    var response = {
      status: 200,
      message: seller
    };
    if (err) {
      console.log("Error finding seller");
      response.status = 500;
      response.message = err;
    } else if (!seller) {

      console.log(response.message);
      response.status = 404;
      response.message = { message: "seller ID not found" };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.sellersAddOne = function (req, res) {
  console.log("Post to add a seller");
  if (req.body) {
    Seller.create(
      {
        companyName: req.body.companyName,
        address: req.body.address
      },
      function (err, seller) {
        const response = {
          status: 201,
          message: seller,
        };
        if (err) {
          response.status = 400;
          response.message = err;
        }
        res.status(response.status).json(response.message);
      }
    );
  } else {
    console.log("Data missing from POST body");
    res.status(400).json({ error: "Required data" });
  }
};

module.exports.sellerDeleteOne = function (req, res) {
  var sellerId = req.params.sellerId;
  console.log("DELETE sellerId ", sellerId);
  Seller.findByIdAndRemove(sellerId).exec(function (err, deletedseller) {
    var response = { 
      status: 204 
     };
 
    if (err) {
      console.log("Error finding seller");
      response.status = 500;
      response.message = err;
    } else if (!deletedseller) {
      response.status = response.message = { message: "seller ID not found" };
    } else {
      res.status(response.status).json(response.message);
    }
  });
};

module.exports.sellerUpdateOne = function (req, res) {
  var sellerId = req.params.sellerId;
  Seller.findById(sellerId)
    .select("-address")
    .exec(function (err, seller) {
      var resp = { status: 200 ,
      message:seller};
      if (err) {
        console.log("Error finding seller");
        response.status = 500;
        response.message = err;
      } else if (!seller) {
        response.status = 404;
        response.message = {
           message: "seller ID not found"
           };
      }



      if (resp.status !== 200) {
        res.status(response.status).json(respons.message);
      } else {
        seller.companyName = req.body.companyName;
        seller.address = req.body.address;
        seller.save(function (err, updatedseller) {
          resp.message = updatedseller;
          if (err) {
            response.status = 500;
            response.message = err;
          } else {
            res.status(resp.status).json(resp.message);
          }
        });
      }
    });
};
