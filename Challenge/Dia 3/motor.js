class Motor{
    estadoDelMotor;
    constructor(estadoDelMotor){
        this.estadoDelMotor=estadoDelMotor;
    }
arrancarMotor(){
    return this.estadoDelMotor=true;
    }
apagarMotor(){
    return this.estadoDelMotor=false;
    }
}