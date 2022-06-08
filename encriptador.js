var texto = document.querySelector("#input-texto").value;

//encriptar el texto
function encriptar(texto){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".entrada-texto").value = textoCifrado;
    document.querySelector("#msg.box").value;
}

var boton1 = document.querySelector("#encriptar-texto"); 
    boton1.onclick = encriptar;
    
//Imprimir el resultado en el input
console.log(textoEncriptado);
var textoSalida = document.querySelector("#msg");
textoSalida.value = textoEncriptado;


var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
});


//desencriptar el texto
function desencriptar(texto){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".entrada-texto").value = textoDesencriptado; 
    document.querySelector("#msg-box").value;
}

//Imprimir el resultado en el input
     console.log(textoDesencriptado);
     var textoSalida = document.querySelector("#msg.box");
     textoSalida.value = textoDesencriptado;


var desencriptar = document.querySelector("#desencriptar-texto");
    boton2.onclick = desencriptar;



         
            
 
    


        
       
