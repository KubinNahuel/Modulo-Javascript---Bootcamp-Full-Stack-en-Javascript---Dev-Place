let agenda = [
    [123456,"marta", "lopez", 1236456],
    [654321, "lucas", "ramires", 654123],

]
let menu;
do{
 menu = prompt(" 1 Ver la matriz. \n 2 Agregar datos a la matriz. \n 3 eliminar datos de la matriz. \n 4 Buscar datos por dni.");

switch(menu){
    case "1":
        window.alert(agenda);
        break;

    case "2":
        let agregarDni = parseInt(prompt("agrega tu dni.."));
        let agregarNom =prompt("agrega tu Nombre..");
        let agregarApe =prompt("agrega tu Apellido..");
        let agregarTel = parseInt(prompt("agrega tu Telefono.."));

        agenda.push([agregarDni, agregarNom, agregarApe, agregarTel]) ;
        window.alert(agenda);
        break;

    case "3":
        let elementoEliminado = prompt(agenda + " coloca la fila que desee eliminar ");
        agenda.splice(elementoEliminado, 1);
        window.alert(agenda);
        break;

    case "4":
        let buscarDni  = parseInt(prompt(agenda + " escribi el DNI que vas a buscar..."));
         let index=0
         index = agenda.findIndex(element => element[0] === buscarDni );
        console.log(index)
        window.alert( 'es igual al dni que buscaste ' + agenda[index]);
        break;
    case "0":
        break;
    default: alert("Ingrese una opcion valida");
        break;

}}while(menu != "0" );