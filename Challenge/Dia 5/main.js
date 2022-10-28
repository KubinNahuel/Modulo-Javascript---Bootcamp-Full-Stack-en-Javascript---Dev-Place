class Persona{
    nombre;
    apellido;
    id;
    estadoCivil;
    constructor(nombre,apellido,id,estadoCivil){
        this.nombre= nombre;
        this.apellido=apellido;
        this.id=id
        this.estadoCivil=estadoCivil;
    }

}
class Empleados extends Persona{
    incorporacion;
    despacho;
    constructor(nombre,apellido,id,estadoCivil,incorporacion,despacho){
        super(nombre,apellido,id,estadoCivil)
        this.incorporacion=incorporacion;
        this.despacho=despacho;
    }
    reasignacionDespacho(){
        this.despacho=despacho;
    };
}

class Profesor extends Empleados{
    departamentoTrabajo;
    constructor(nombre,apellido,id,estadoCivil,incorporacion,despacho,departamentoTrabajo){
        super(nombre,apellido,id,estadoCivil,incorporacion,despacho)
        this.departamentoTrabajo=departamentoTrabajo
    }
}
class Servicios extends Empleados{
    seccion;
    constructor(nombre,apellido,id,estadoCivil,incorporacion,despacho,seccion){
        super(nombre,apellido,id,estadoCivil,incorporacion,despacho)
        this.seccion=seccion;
    }
    cambiarDepartamento(){
        this.seccion=seccion;
    }
}
class Estudiantes extends Persona{
    curso;
    constructor(nombre,apellido,id,estadoCivil,curso){
        super(nombre,apellido,id,estadoCivil)
        this.curso=curso;
    }
    cambiarCurso(){
        this.curso=curso;
    }
}

let listEstudiantes=[];
let estudiante1=new Estudiantes("Nahuel","Kubin",5,"Soltero",1)
let estudiante2=new Estudiantes("Maxi","Herrera",5,"Soltero",1)
listEstudiantes.push(estudiante1,estudiante2);

console.table(listEstudiantes)

let listProfesor=[];
let profesor1=new Profesor("Martos","Lunera",2,"Soltero",2002,"sala del te","java");
let profesor2=new Profesor("Maxi","Herrera",5,"Soltero",2010,"sala del te","php");
listProfesor.push(profesor1,profesor2);
console.table(listProfesor);

let listServicios=[];
let servicios1=new Profesor("marta","Lunera",2,"Soltero",2002,"sala del baño","Bibliotecaria");
let servicios2=new Profesor("puta","Herrera",5,"Soltero",2010,"sala del baño","baño");
listServicios.push(servicios1,servicios2);
console.table(listServicios)
