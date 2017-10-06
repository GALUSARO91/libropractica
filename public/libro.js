//Inicio codigo JS

var clases =[{"nombre":"#inicio", "clase":"portada portada-estetica", "orden":"1"},
    {"nombre":"#acerca_de", "clase":"paginas1 paginas", "orden":"2"},
    {"nombre":"#portafolio_1", "clase":"paginas1 paginas", "orden":"3"},
    {"nombre":"#contacto","clase":"portada contraportada", "orden":"4"}
    ],numero; 
var anterior = null;

$(document).ready(function(){
    
    $("a").click(function(){
        var id = $(this).attr("href");
        
        seleccionar();
        
        aplicar();
       
       function seleccionar(){
        $(id).removeClass("oculto");
        clases.forEach(function(item){
            if(item.nombre !== id){
           $(item.nombre).children().css("visibility","hidden");
           $(item.nombre).removeClass()
           $(item.nombre).addClass("oculto");
            }
        });
        
       }
       
       function aplicar(){
        var aplica;
        //clases.forEach(function(item){if(id==item.nombre){aplica=item.clase; numero= item.orden}});
        clases.forEach(function(item){if(id==item.nombre){aplica=item.clase.slice(0,item.clase.indexOf(" ")); numero= item.orden}});
        
        $(id).addClass(aplica);
      animar();
      $(id).on("animationstart",$(id).children().css("visibility","hidden"));
      $(id).on("animationend",function(){
            $(id).children().css("visibility","visible");
            $(id).removeClass();
            $(id).addClass(clases[numero-1].clase);
        });
        anterior = numero;
        
       }
       
        
    function animar(){
        
       // alert("numero: "+ numero);
    //    alert("anterior: "+ anterior);
        
       if(numero > anterior){ //forward or backwards
            
            switch(numero*1){
                
                case 2:
                    $(id).addClass("abrirlibroadelante");
                
                break;
                case 4:
                    $(id).addClass("cerrarlibroatras");
                break;    
                default:
                $(id).addClass("avanzar");
                
            }
            
            
        }
        else {
              switch(numero*1){
                
                case 1:
                    $(id).addClass("cerrarlibroadelante");
                
                break;
                case 3:
                    $(id).addClass("abrirlibroatras");
                break;    
                default:
                $(id).addClass("retroceder");
                
        }
    }
    
    }
    
    });
   
    
    
    
})