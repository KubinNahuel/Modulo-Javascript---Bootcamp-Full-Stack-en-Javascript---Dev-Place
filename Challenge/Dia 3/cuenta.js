class Cuenta{
    titular;
    cantidad;

constructor(titular=" ", cantidad=0){
        this.titular=titular;
        this.cantidad=cantidad;
    }
getTitular(){
    return this.titular;
}
setTitular(titular){
    this.titular=titular;
}
getCantidad(){
    return this.cantidad;
}

setCantidad(titular){
    if(this.titular != undefined){
        let menu;
        do{
            menu=prompt("1 ingresar dinero, 2 Retirar dinero, 0 salir")
            switch(menu){
                case "1":
                   IngresarCantidad()
                    break;
                case "2":
                    retirarCantidad()
                    break;
                case "0":
                    alert("adeu");
                    break;
                default:
                    alert("Dato invalido")
                    break;
            }
        }while(menu != 0 );
    
    }else{
        alert("El titular es obligatorio")
    }
}
IngresarCantidad(cantidad){
    this.cantidad=this.cantidad+parseFloat(prompt("Cuanta cantidad desea ingresar: "))
}
retirarCantidad(cantidad){
    this.cantidad=this.cantidad-parseFloat(prompt("Cuanta cantidad desea retirar: "))
}
}

var cuenta= new Cuenta;
cuenta.setTitular("Carlos")
cuenta.setCantidad("Carlos")