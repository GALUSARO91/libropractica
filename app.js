// app.js 
var express = require("express");
const nodemailer = require('nodemailer');
var exec = require('child_process').exec;
var app = express();
var bodyParser =require('body-parser');
//definir variables

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
exec('haraka -c ./mailserver',function(err, stdout, stderr) {
    if (err) { throw err; }
        console.log('stdout:\n', stdout);
        console.log('stderr:\n', stderr);
        cosole.log('correo iniciado');
}); //iniciar servidor de correo

let transportador = nodemailer.createTransport({
    host: 'localhost',
    port: 2525,
    secure: false
    });

//configuraciones de las rutas
app.get("/",function(req,res){
    res.render("index");
});

app.post("/correo",function(req,res){
    let opciones = {
        from: req.body.Mi_correo,
        to: 'luis@email.com',
        subject: req.body.Asunto,
        html: "<p>"+req.body.mensaje+"</p> <br> <p><strong>Atentamente:</strong>"+req.body.Mi_nombre+"</p>"
    };
    
    
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