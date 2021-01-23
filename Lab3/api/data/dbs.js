

var express=require("express");
require("./api/data/db");
var path=require("path");
var router=require("./api/router");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.set("port",8080);
app.use(function(req,res,next){
    console.log(req.method,req.url);
     next();
});
app.use(express.static(path.join(__dirname,"public")));
app.use(("/node_modules",express.static(path.join(__dirname,"node_modules"))));
app.use(bodyParser.json());
app.use("/api",router)
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("the application is running at the"+port)
})









var mongoose=require("mongoose");
require("./model-data.js");
var dbName="studentOpens";
var dbURL="mongodb://localhost:27017/"+dbName;
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("disconnected",function(){
    console.log("the mongodb is diconnected")
});
mongoose.connection.on("connected",function(){
    console.log("the mongodb is connected to ",dbURL)
})
mongoose.connection.on("error",function(err){
    console.log("error has has been happening"+err)
})
process.on("SIGINT",function(){
    mongoose.connection.close(function(){
    console.log("the mongodb is diconnected  by app termination ");
    process.exit(0);   
})
})
process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
    console.log("the mongodb is disconnected by the app termination");
    process.exit(0);   
})
})
process.once("SIGUSR2",function(){
    mongoose.connection.close(function(){
    console.log("the mongodb is diconnected");
    process.kill(process.pid,"SIGUSR2");    
})
})
    
var mongoose = require("mongoose");
var addressSchema = new mongoose.Schema({
    street: {
        type: String,
        require: true
    },
    zipCode: Number,
    city: String,
    state: String
})
var mongoose = require("mongoose");
var jonSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
    postDate: Date,
    description: String,
    expereince: Number,
    skill: [String],
    location: addressSchema
})
mongoose.model("student", jonSchema, "student");




var express=require("express");
var router=express.Router();
var controllerstudent=require("../controller/student-controller.js");
router.route("/student")
.get(controllerstudent.getAllstudentOpening)
.post(controllerstudent.addonestudent);
 router.route("/student/:studentId").get(controllerstudent.getOnestudent)
 .delete(controllerstudent.deleteOnestudent)
 .put(controllerstudent.updateOnestudent);
module.exports=router;



var mongoose = require("mongoose");
var student = mongoose.model("student");

module.exports.getAllstudentOpening = function (req, res) {
    
    var offset = 0;
    var count = 5;

    const maxCount = 10;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    };

    if (req.query &&req.query.lat && req.query.lng) {
        runGeoQuery(req,res);
        return;
    };

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    };

    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString Offset and Count should be numbers" });
        return;
    }
    if (count > maxCount) {
        res.status(400).json({ "message": "Cannot exceed count of " + maxCount });
        return;
    };
    student.find().skip(offset).limit(count).exec(function (err, student) {
        var response = {
            status: 200,
            message: student
        }
        if (err) {
            response.status = 500,
                response.message = err
        }
        res.status(response.status).json(response.message)
    })
}
module.exports.addonestudent = function (req, res) {
    if (req.body) {
        student.create({
            title: req.body.title,
            salary: parseFloat(req.body.salary),
            exprerience: parseInt(req.body.year),
            skill: req.body.skill,
            postDate: Date.now(),
            description: req.body.description,
            location: {}
        }, function (err, student) {
            var response = {
                status: 200,
                message: student
            }
            if (err) {
                response.status = 500,
                    response.message = err
            } else { res.status(response.status).json(student); }
            res.status(response.status).json(response.message)
        })
    } else {
        res.status(404).json({ "message": "The body is empty, you have to fill the input" });
    }
}

module.exports.getOnestudent = function (req, res) {
    console.log("i am at the getOnestudent");
    var studentId = req.params.studentId;
    console.log("i am at the and studentId is " + studentId);

    student.findById(studentId).exec(function (err, student) {
        var response = {
            status: 201,
            message: student
        }
        if (err) {
            response.status = 500,
                response.message = err
        } else if (!student) {
            response.status = 404,
                response.message = { "message": "There is no student with this id" }
        }
        res.status(response.status).json(response.message);

    })
}
module.exports.deleteOnestudent = function (req, res) {
    console.log("i am at the delete controller");
    var studentId = req.params.studentId;

    student.findByIdAndRemove(studentId).exec(function (err, deletedstudent) {
        var response = {
            status: 200,
            message: deletedstudent
        }
        if (err) {
            response.status = 500,
                response.message = err
        } else if (!deletedstudent) {
            response.status = 404,
                response.message = { "message": "There is no student with this id" }
        }
        res.status(response.status).json(response.message);
    })
}


module.exports.updateOnestudent = function (req, res) {
    var studentId = req.params.studentId;
    console.log(studentId)
    student.findById(studentId).select("-location").exec(
        function (err, student) {
            var response = {
                status: 204,
                message: student
            }
            if (err) {
                console.log("Error finding student", err);
                response.status = 500;
                response.message = err;
            } else if (!student) {
                response.status = 404;
                response.message = { "message": "student ID not found" };
            }
            if (response.status !== 204) {
                res.status(response.status).json(response.message);
            }
            else {
                student.title = req.body.title;
                student.salary = parseFloat(req.body.salary);
                student.exprerience = parseInt(req.body.year);
                student.skill = req.body.skill;
                student.postDate = Date.now();
                student.description = req.body.description;
                student.save(function (err, studentUpdated) {
                    var respons = {
                        status: 200,
                        message: studentUpdated
                    }
                    if (err) {
                        console.log("Error finding student", err);
                        response.status = 500;
                        response.message = err;
                    }

                    res.status(respons.status).json(respons.message)
                })
            }
        })
};



angular.module("studentApp").factory("DatastudentFactory", DatastudentFactory);
function DatastudentFactory($http) {
    return {
        getallstudent: getallstudent,
        getOnestudent: getOnestudent,
        poststudent: poststudent,
        deletestudent: deletestudent,
        updatestudent: updatestudent
    }
    function getallstudent() {
        return $http.get("/api/student/").then(complete).catch(failed);
    }
    function getOnestudent(id) {
        return $http.get("/api/student/" + id).then(complete).catch(failed);
    }
    function poststudent(student) {
        return $http.post("/api/student/", student).then(complete).catch(failed);
    }
    function deletestudent(id) {
        return $http.delete("/api/student/" + id).then(complete).catch(failed);
    }
    function updatestudent(id) {
        return $http.delete("/api/student/" + id).then(complete).catch(failed)
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}



{{student}}


angular.module("studentApp",["ngRoute"]).config(config);
function config($routeProvider){
 $routeProvider
    .when("/",{
        templateUrl:"angular-app/student-list/student.html",
        controller:"studentController",
        controllerAs:"vm"
    }).when("/student/:id",{
        templateUrl:"angular-app/student-display/student.html",
        controller:"studentController",
        controllerAs:"vm"
    }).when("/delete/student/:id",{
        templateUrl:"angular-app/student-delete/student-delete.html",
        controller:"DeletestudentController",
        controllerAs:"vm"
    })
}



angular.module("studentApp").controller("studentController", studentController);
function studentController($routeParams, DatastudentFactory) {
  var id = $routeParams.id;
  var vm = this;
  DatastudentFactory.getOnestudent(id).then(function (response) {
    vm.student = response;
  })
}






angular.module("meanGames").
    controller("GamesController", GamesController);

function GamesController(GameDataFactory) {
    var vm = this;
    vm.title = "MEAN Games App";

    GameDataFactory.getAllGames()
        .then(function (response) {
            vm.games = response;
        });
    



    vm.postGame = function () {
        var postData = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            rate: vm.newGameRating,
            year: vm.newGameYear,
            rating: vm.newGameRating,
            minPlayers: vm.newGameMinPlayers,
            maxPlayers: vm.newGameMaxPlayers,
            minAge: vm.newGameMinAge,
            designers: vm.newGameDesigner,
        };
  console.log(postData)
        if (vm.gameForm.$valid) {
            GameDataFactory.postGame(postData).then(function (response) {
                console.log("Game saved");
                //
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            vm.isSubmitted = true;
        }
    };
}









angular.module("studentApp").controller("studentController", studentController);

function studentController(DatastudentFactory) {
    var vm = this;
    vm.name = "all student Opened";
    console.log("studentController =========");
    DatastudentFactory.getallstudent().then(function (response) {
        vm.student = response;
    })

    vm.poststudent = function () {
        var postData = {
            title: vm.newstudentTitle,
            salary: vm.newstudentalary,
            description: vm.newstudentDescription,
            year: vm.newstudentExprience,
            skill: vm.newstudentkill,

        };
        DatastudentFactory.poststudent(postData).then(
            function (response) {
                console.log("Game saved");

            }).catch(function (error) {
                console.log(error);
            });

    };
}














//h1>{{vm.name}}</h1>






{/* <ul>
    <li ng-repeat="student in vm.student">
        <a ng-href="#!/student/{{student._id}}" style="color: darkgoldenrod;">{{student.title}}</a>
        <a ng-href="#!/update/student/{{student._id}}" style="color:cornflowerblue;">update</a>
        <a ng-href="#!/delete/student/{{student._id}}" style="color: red;">delete</a>
    </li>
</ul>

<form name="vm.studentForm" ng-submit="vm.poststudent()">
    To add a new studentOpene please fill in all the fields below:<BR />
    Title: <input type="text" name="title" required ng-model="vm.newstudentTitle" /><BR />
    Salary : <input type="text" name="salary" required ng-model="vm.newstudentalary" /><BR />
    Description: <input type="text" name="description" required ng-model="vm.newstudentDescription" /><BR />
    Exprience : <input type="number" name="exprience" required ng-model="vm.newstudentExprience" /><BR />
    Skill: <input type="text" name="skill" required ng-model="vm.newstudentkill" /><BR />


    <button type="submit" class="btn-success">Add student</button><BR />
</form>


 */}


 ngular.module("studentApp").controller("studentController", studentController);

function studentController(DatastudentFactory) {
    var vm = this;
    vm.name = "all student Opened";
    console.log("studentController =========");
    DatastudentFactory.getallstudent().then(function (response) {
        vm.student = response;
    })

    vm.poststudent = function () {
        var postData = {
            title: vm.newstudentTitle,
            salary: vm.newstudentalary,
            description: vm.newstudentDescription,
            year: vm.newstudentExprience,
            skill: vm.newstudentkill,

        };
        DatastudentFactory.poststudent(postData).then(
            function (response) {
                console.log("Game saved");

            }).catch(function (error) {
                console.log(error);
            });

    };
}







    








