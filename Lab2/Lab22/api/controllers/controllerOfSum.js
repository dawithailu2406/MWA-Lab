module.exports.sumNumber=function(req,res){
    const intiger1=parseInt(req.params.num1);
    const intiger2=parseInt(req.query.num2);
    console.log("the first intiger is  "+intiger1);
    console.log("the second intiger is  "+intiger2);
    const totalSum=intiger1+intiger2;
    const total="The total sum is  "+totalSum;
    console.log(total);
    res.status(200).json(total);
};

