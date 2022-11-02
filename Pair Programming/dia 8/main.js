  var palabras= [
    ["plaza", "Espacio público"],
    ["rueda", "Gran invento"],
    ["higuera", "Un árbol"],
    ["everest", "Un monte"],
    ["relampago", "Antecede al trueno"]
];


var palabra ="";
var numAleatorio;
var desaparecido=[];
var cont= 6;
var vacio = document.getElementById("palabra");
var buttons = document.getElementsByClassName("letra");
var btnInicio = document.getElementById("reset");
var btnletra = document.getElementById("letraa");
var btnEnviar = document.getElementById("enviar");


function generaPalabra() {
    numAleatorio = (Math.random() * 4).toFixed(0);
    palabra = palabras[numAleatorio][0].toUpperCase();
  }
function pista() {
    document.getElementById("hueco-pista").innerHTML = palabras[numAleatorio][1];
  }
function pintarGuiones(num) {
    vacio.innerHTML = "";
    for (var i = 0; i < num; i++) {
      desaparecido[i] = "_ ";
    }
    vacio.innerHTML = desaparecido.join("");
  }  


function intento(letra) {
    letra = btnletra.value.toUpperCase();
    if(letra.length > 1){
        alert("Ingresa un solo caracter")
    }else{  
    if (cont > 0) {
      if (palabra.indexOf(letra) != -1) {
        for (var i = 0; i < palabra.length; i++) {
          if (palabra[i] == letra)  desaparecido[i] = letra;
        }
        vacio.innerHTML = desaparecido.join("");
       
      } else {
        cont--;
        document.getElementById("intentos").innerHTML = cont;
      }
      
      compruebaFin();
      
    }
}}

  function compruebaFin() {
    if (desaparecido.indexOf("_ ") == -1) {

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
      document.getElementById("reset").innerHTML = "Empezar";
      btnInicio.onclick = function () {
        inicio();
      };
    } else if (cont == 0) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
      document.getElementById("reset").innerHTML = "Empezar";
      btnInicio.onclick = function () {
        inicio();
      };
    }
  }
  function inicio() {
    palabra = "";
    desaparecido = [];
  
    document.getElementById("palabra").classList.remove("encuadre");
    generaPalabra();
    pintarGuiones(palabra.length);
    cont = 6;
    document.getElementById("intentos").innerHTML = cont;
  }
  
  window.onload = inicio();
  