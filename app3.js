// web app envia correos a traves de gmail
var express = require("express");
const nodemailer = require('nodemailer');
var xoauth = require('xoauth2');
var app = express();
var bodyParser =require('body-parser');
//definir variables

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

var transportador = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    xoauth2: xoauth.createXOAuth2Generator({
            user: 'lgrs91@gmail.com',
            clientId: '470166973923-o5m2q61avpv852aik4fe88c83jd3id65.apps.googleusercontent.com',
            clientSecret: 'SjhmVd3S3bHZznLXkd-gWPsm',
            refreshToken: '1/1PsLBRYQ8Hf5Cd7qFbBLQjz5_l3SoTmzrMvBmybuR2U'
        })
      }
    });

//configuraciones de las rutas
app.get("/",function(req,res){
    res.render("index");
});

app.post("/correo",function(req,res){
    var opciones = {
        from: req.body.Mi_correo,
        to: 'glsr91@hotmail.com',
        subject: req.body.Asunto + " Nombre: " + req.body.Mi_nombre,
        html: "<p>"+req.body.mensaje+" Nombre: "+ req.body.Mi_nombre+"</p>"
    };
    
 //aca comienza el envio del correo   
    transportador.sendMail(opciones, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      
        
    });
    
    res.render("index");
});

 app.listen(3000,function(){
    console.log("Servidor inciado!!!");
}); 