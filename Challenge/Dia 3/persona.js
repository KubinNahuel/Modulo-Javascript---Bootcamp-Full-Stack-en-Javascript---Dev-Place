class Persona{
    nombre;
    edad;
    DNI;
    constructor(nombre=" ",edad=0,DNI=0){
        this.nombre=nombre;
        this.edad=edad;
        this.DNI=DNI;
    }
    getDni(){
        return this.DNI;
    }
    setDni(DNI){
        this.DNI=DNI;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(edad){
        this.edad=edad;
    }
    mostrar(nombre,edad,DNI){
        console.log(this.nombre + "\n" + this.edad + "\n" + this.DNI)
    }
    esMayorDeEdad(edad){
        if(this.edad>=18){
            console.log("Es mayor de edad.")
        }else{console.log("Es menor de edad")}
    }
}
var persona=new Persona;
persona.setNombre("Carlos");
persona.setEdad(17)
persona.setDni(43944346)
persona.mostrar();