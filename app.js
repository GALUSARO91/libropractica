// app.js 
var express = require("express");

var app = express();

var bodyParser =require('body-parser');
app.set("view engine","ejs");
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.get("/",function(req,res){
    res.render("index");
});





 app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Servidor inciado!!!");
}); 