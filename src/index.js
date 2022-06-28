const express = require('express');
const app =express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));


app.use(express.static(staticPath));


app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
})


app.post("/",function(req,res){
 var weight = Number(req.body.weights);
 var height = Number(req.body.heights);
 var BMI = weight / (height*height);
if(BMI<= 18.4){
   res.send("You Are Underweight And Your BMI Is "+BMI);
}
else if(BMI>18.5 && BMI<24.9){
    res.send("You Are Normal And Your BMI Is "+BMI);
}
else if(BMI>25.0 && BMI<39.9){
    res.send("You Are Overweight And Your BMI Is "+BMI);
}
else if(BMI>= 40.0){
    res.send("You Are Obese And Your BMI Is "+BMI);
}
})


app.listen(3000, function(){
    console.log("Server Is Working");
})