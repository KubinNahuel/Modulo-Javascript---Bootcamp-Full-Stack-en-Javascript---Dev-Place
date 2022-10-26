class Agenda{
    dni;
    nombre;
    apellido;
    telefono;
    constructor(dni,nombre,apellido,telefono){
    this.dni=dni;
    this.nombre=nombre;
    this.apellido=apellido;
    this.telefono=telefono;
}

getDni(){
    return this.dni;
}
setDni(){
    this.dni=dni;
}
getNombre(){
    return this.Nombre;
}
setNombre(){
    this.nombre=nombre;
}
getApellido(){
    return this.apellido;
}
setApellido(){
    this.apellido=apellido;
}
getTelefono(){
    return this.telefono;
}
setTelefono(){
    this.telefono=telefono;
}

mostrarAgenda(){
    return this.dni + this.nombre + this.apellido + this.telefono;
}

}

var menu;
var misPersonas=[];
var persona;

function ingresarPersona(){
    let agregarDni = parseInt(prompt("agrega tu dni.."));
    let agregarNom =prompt("agrega tu Nombre..");
    let agregarApe =prompt("agrega tu Apellido..");
    let agregarTel = parseInt(prompt("agrega tu Telefono.."));
    persona= new Agenda(agregarDni, agregarNom, agregarApe, agregarTel) ;
    misPersonas.push(persona);
    }

    do{
        menu = prompt(" 1 Ver la matriz. \n 2 Agregar datos a la matriz. \n 3 eliminar datos de la matriz. \n 4 Buscar datos por dni.");
       
       switch(menu){
           case "1":
            misPersonas.forEach(element => {
                console.log(element)
            });
               break;
       
           case "2":
               ingresarPersona()
               break;
       
           case "3":
               let elementoEliminado = prompt(" coloca la fila que desee eliminar ");
               misPersonas.splice(elementoEliminado, 1);
               break;
       
           case "4": 
               let buscarDni  = parseInt(prompt(" escribi el DNI que vas a buscar..."));
             
                for (let j = 0; j < misPersonas.length; j++){
                     if(misPersonas[j].dni == buscarDni)   {
                        window.alert( 'es igual al dni que buscaste ');
                        break;
            }  else{
                console.log("NO ENTRA")
            }
        }
              break;
           case "0":
               break;

           default: alert("Ingrese una opcion valida");
               break;
       
       }}while(menu != "0" );
