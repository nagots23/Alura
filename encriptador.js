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

function copiar(){
    var textCopy = document.getElementById("resultado");
    textCopy.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}

var botonCopiar = document.querySelector("#copiar-texto");
botonCopy.addEventListener("click",function(event){
    event.preventDefault();
    var cajaTexto = document.querySelector("#resultado");
    var texto = cajaTexto.value;
    checkTextoUsuario(texto);
    copiar();
    limpiarCampo(cajaTexto);      
    return;
});



         
            
 
    


        
       
