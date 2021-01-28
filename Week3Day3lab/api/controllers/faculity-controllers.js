
module.exports.getAttencence=function (req,res){



    var students =
    [{firstName: "Dawit",lastName: "Hailu", id: 112480 ,date:"01/12/2021"},
    { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/12/2021"},
    { firstName: "Saba", lastName: "Efrem", id: 064123 ,date:"01/12/2021"},
    { firstName: "Dawit", lastName: "Hailu", id: 112480 ,date:"01/13/2021"},
    { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/13/2021"},
    { firstName: "Saba", lastName: "Efrem", id: 064123 ,date:"01/13/2021"},
    { firstName: "Dawit", lastName: "Hailu", id: 112480 ,date:"01/14/2021"},
    { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/14/2021"},
    { firstName: "Saba", lastName: "Efrem", id: 064123 ,date:"01/14/2021"},
    { firstName: "Dawit", lastName: "Hailu", id: 112480 ,date:"01/15/2021"},
    { firstName: "Nahom", lastName: "Tesema", id: 395623 ,date:"01/15/2021"},
    { firstName: "Saba", lastName: "Efrem", id: 064123 ,date:"01/15/2021"}]

if(!students){
    response.status=404,
    response.message=students
}

    var response={
        status:200,
        message :students
    }
    res.status(response.status).json(response.message)

};

module.exports.deleteAndEdit=function(req,res){
    var response={
        status:200,
        message :{"message":"deleting and Editing fuction is  in progress.................."}
    }
    res.status(response.status).json(response.message)

 }
 module.exports.qRread=function(req,res){
    var response={
        status:200,
        message:[{firstName:"Dawit",lastName:"Hailu",id:112480,attendance:"present"},
        {firstName:"Nahom",lastName:"Tesema",id:395623,attendance:"absent"}]
    }
    res.status(response.status).json(response.message)

 }


 module.exports.scanningQR=function(req,res){
    var response={
        status:200,
        message :{"message":"Qr Has been  option  fuction is  in progress.................."}
    }
    res.status(response.status).json(response.message)

}
