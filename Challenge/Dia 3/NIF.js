class NIF{
    dni;
    letraCorresp;
    
    constructor(dni=0,letraCorresp=" "){
        this.dni=dni;
        this.letraCorresp=this.calcularLetra();
    }

    calcularLetra(){
        let letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
        return letras[this.dni%23];
    }
    ingresarDni(){
        do{
            this.dni=parseInt(prompt("Introduzca su DNI"))
        }while(this.dni<=0);
        this.letra=this.calcularLetra()
    }
    
    Leer(){
        return "Su Dni es " + this.dni + "-" + this.letra;
    }
    getDni(){
        return this.dni;
    }
    setDni(dni){
        this.dni=dni;
    }
}


