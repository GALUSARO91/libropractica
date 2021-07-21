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





 app.listen(3000,function(){
    console.log("Servidor inciado!!!");
}); 