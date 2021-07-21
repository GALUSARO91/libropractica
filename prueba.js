
const nodemailer = require('nodemailer');
var exec = require('child_process').exec;

//definir variables


exec('haraka -c ./mailserver',function(err, stdout, stderr) {
    if (err) { throw err; }
        console.log('stdout:\n', stdout);
        console.log('stderr:\n', stderr);
        cosole.log('correo iniciado');
}); //iniciar servidor de correo

let transportador = nodemailer.createTransport({
    host: 'localhost',
    port: 587,
    secure: true,
    auth: {
        user: 'matt',
        pass: 'test'
      },
    tls:{rejectUnauthorized: false}
    });

transportador.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});

let opciones = {
        from: 'yo@example.com',
        to: 'luis@email.com',
        subject: "Hola",
        text: "Prueba"
    };
    
transportador.sendMail(opciones, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      
        
    });