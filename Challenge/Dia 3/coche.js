class coche{
    motor;
    puerta;
    ruedas;
    estadoRuedas;
    estadoMotor;
    estadoPuertas;
    constructor(motor,puerta=2,ruedas=4,estadoRuedas,estadoMotor,estadoPuertas){
        this.puerta=puerta;
        this.motor=motor;
        this.ruedas=ruedas
        this.estadoRuedas=estadoRuedas;
        this.estadoMotor=estadoMotor;
        this.estadoPuertas=estadoPuertas;
    }
inflarRueda(){
    return this.estadoRuedas=true;
}
desinflarRueda(){
    return this.estadoRuedas=false;
}
arrancarMotor(){
    return this.estadoDelMotor=true;
    }
apagarMotor(){
    return this.estadoDelMotor=false;
    }
abrirPuerta(){
    return this.estadoPuertas=true;
    }
cerrarPuerta(){
    return this.estadoPuertas=false;
    }
}