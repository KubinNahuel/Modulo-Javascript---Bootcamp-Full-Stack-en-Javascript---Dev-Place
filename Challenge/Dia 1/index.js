//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100.
/*
let compra= prompt("Ingrese el valor de tu compra: ");
let precioTotal= parseInt(compra)+(( parseInt(compra)*21)/100);
window.alert("El precio total de su producto es: "+ precioTotal);
*/



//En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
/*
let creditos = prompt(" 1 credito: Consolas. \n 2 creditos: Juegos 2D. \n 3 Creditos: juegos 3D. \n 4 Creditos: Acceso a todas las salas.")
switch(creditos){
    case "1":
        window.alert("Podra ingresar a la sala de consolas");
        break;
    case "2":
        window.alert("Podra ingresar a la sala de Juegos 2D");
        break;
    case "3":
        window.alert("Podra ingresar a la sala de Juegos 3D");
        break;
    case "4":
        window.alert("Tiene acceso a todas las salas");
        break;
    }
*/



//En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 y si elige electrico o 3 se le enviará a la ofician 300.
/*
let tiendaCoches=prompt(" 1: Gasolina. \n 2: Diesel. \n 3: Electrico.")

    if(tiendaCoches=="1" || tiendaCoches=="gasolina" || tiendaCoches=="Gasolina"){
        window.alert("Ingrese a la sala numero 100");
    }else if (tiendaCoches=="2" || tiendaCoches=="diesel" || tiendaCoches=="Diesel"){
        window.alert("Ingrese a la sala 200");
    }else if (tiendaCoches=="3" || tiendaCoches=="Electrico" || tiendaCoches=="electrico"){
        window.alert("Ingrese a la sala 300");
    }
*/



//Un comerciante hace descuentos a sus clientes de la siguiente forma:
//Si ha comprado menos de 100 euros no hay descuento
//Si la compra está entre 100 y 300 euros le descuenta un 5%
//Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
//Si la compra supera los 400 euros le descuenta un 15%
/*
let compra2= parseInt(prompt("Ingrese cuantos euros se ha gastado en su comprado: "));
    if(compra2 < 100){
        window.alert("Usted no obtiene descuento")
}else if( compra2 >=100 && compra2 <=300){
    let descuento= (compra2/100)*5 ;
    window.alert(descuento - compra2);
}else if( compra2 >300 && compra2 <500){
    let descuento= (compra2/100)*10 ;
    window.alert(descuento - compra2);
}else if( compra2 >=500){
    let descuento= (compra2/100)*15 ;
    window.alert(descuento - compra2);
}
*/

//Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.


/*
let repeticion=prompt("Ingrese un numero: ")
var aux;
for (let i=0;i<=parseInt(repeticion);i++){
aux=  i + ',' ;
}
window.alert(aux);
*/


//En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
/*
let numeroM= parseInt(prompt("Ingresa un numero"))
for (let j=0;j<=numeroM;j++){
    if((j%3)==2){
        console.log(j);
    }
}
*/




//Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
/*
let acumulador=0;
let numero4;
for (let g=1; g<=4;g++){
    numero4 = parseInt(prompt("Ingrese un numero"))
    acumulador=acumulador + numero4;
}   

window.alert(acumulador/4);
*/