var mongoose=require("mongoose");
var attendanceSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:String,
    studentId:{
        type:Number,
        required:true
     },
    attendance:{
        type:Boolean,
        default:false
    },
    attendanceDate:Date,
})

var studentSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
   studentId:{
        type:String,
        required:true
    },
    qrCode:String,
    attendance:[attendanceSchema]
})
mongoose.model("Student",studentSchema);