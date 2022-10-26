class Ventana{
    estado;
    constructor(estado){
        this.estado=estado;
    }
subirLaVentana(){
    return this.estado=true;
    }
bajarLaVentana(){
    return this.estado=false;
    }
}