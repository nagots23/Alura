//encriptar el texto
function encriptar(){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}

var boton1 = document.querySelector("#boton-encriptar-texto"); boton1.onclick = encriptar;


//desencriptar el texto
function desencriptar(){ 
    var texto = document.querySelector("#input-texto").value;
    var textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoDesencriptado;
    document.querySelector("#input-texto").value;
}


var boton2 = document.querySelector("#boton-desencriptar-texto"); boton2.onclick = desencriptar;


function copiar() {
    let texto = document.getElementById("msg");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");


         
            
 
    


        
       
