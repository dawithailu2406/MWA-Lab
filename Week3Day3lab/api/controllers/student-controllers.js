var express = require("express");
var path = require("path")



module.exports.studentForm = function (req, res) {
    var response = {
        status: 200,
        message: { "message": "student form in progress.................." }
    }

    res.status(response.status).json(response.message)
};


module.exports.studentRemove = function (req, res) {
    var studentId = req.params.studentId
    console.log(studentId)
    var response = {
        status: 200,
        message: { "message": "student remove fuction is  in progress.................." }
    }
    // var students={status:200,
    //     message:[{firstName:"Dawit",lastName:"Hailu",id:112480},
    //     {firstName:"Nahom",lastName:"Tesema",id:395623}]

    // }

    var students =
        [{ firstName: "Dawit", lastName: "Hailu", id: 112480 },
        { firstName: "Nahom", lastName: "Tesema", id: 395623 }]

    if (studentId) {
        console.log(students)

        var student = students.filter(stu => stu.id == studentId);

        response.status = 200,
         response.message = student
    }

    res.status(response.status).json(response.message)
};


module.exports.createStudent = function (req, res) {
    var response = {
        status: 200,
        message: { "message": "student create fuction is  in progress.................." }
    }

    if (!response) {
        response.status = 500;
        response.message = err;
    }
    res.status(response.status).json(response.message)

}

module.exports.studentList = function (req, res) {

    var students =
        [{ firstName: "Dawit", lastName: "Hailu", id: 112480 },
        { firstName: "Nahom", lastName: "Tesema", id: 395623 }]
    var response = {
        status: 200,
        message:students
    }

    if (!students) {
        response.status = 500,
            response.message = "error in find the user"
        console.log("Error finding username");
    }
        res.status(response.status).json(response.message)

    }

    

    module.exports.studentAttendance = function (req, res) {

        var studentId = req.params.studentId

        var students =
        [{firstName: "Dawit",lastName: "Hailu", id: 112480 ,date:"01/12/2021"},
        { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/13/2021"},
        { firstName: "Dawit", lastName: "Hailu", id: 112480 ,date:"01/13/2021"},
        { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/13/2021"},
        { firstName: "Dawit", lastName: "Hailu", id: 112480 ,date:"01/14/2021"},
        { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/14/2021"},
        { firstName: "Dawit", lastName: "Hailu", id: 112480 ,date:"01/15/2021"},
        { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/15/2021"}]


        var response = {
            status: 200,
            message:students
        }
       
    
        if (!students) {
            response.status = 500,
                response.message = "error in find the user"
            console.log("Error finding username");
        }
        else if (studentId) {
                console.log(students)
        
                var student = students.filter(stu => stu.id == studentId);
        
                response.status = 200,
                 response.message = student
            }
        

        
            res.status(response.status).json(response.message)
    
        }


    module.exports.loginStudent = function (req, res) {
        var User = [{ username: "matti", name: "Dawit Hailu ", password: "fairfield" },
        { username: "ari", name: "Nahom Tesema ", password: "jim" }]

        console.log("Logging in user");

        var name = req.query.username;

        var response = {
            status: 200,
            message: { "message": "student create fuction is  in progress.................." }
        }



        if (name) {

            var student = User.filter(stu => stu.username == name);
            response.status = 200,
                response.message = student
        }

        res.status(response.status).json(response.message)

    }

