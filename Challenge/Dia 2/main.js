

let meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

meses.forEach(element => {
    console.log(element);
});



function devuelveCaracter(num){
if(num%2==0){
    return "Su numero es par";
}else{
    return"Su numero es impar";
}
}

let indicacion= devuelveCaracter(7);
console.log(indicacion);



function muestraInfo(cad){
    
   if(cad===cad.toUpperCase()){
console.log("Esta funcionando")
   }
   else if(cad===cad.toLowerCase()){
    console.log("esta todo en minuscula")
   }else{
    console.log("Es una combinacion de ambas");
   }
    }


muestraInfo("hOla")


function calcFactorial(n){
    let acum=1
    for (let index = 1; index <=n; index++) {
     acum = acum * index;
        
    }
    
    return acum;
}

let aaa= calcFactorial(5);
console.log(aaa);

