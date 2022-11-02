// 1 - Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
//  Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.


class Productos{
    fechaAdquisicion;
    beneficios;
    duracion;
    
    constructor(fechaAdquisicion,beneficios,duracion){
        this.fechaAdquisicion=fechaAdquisicion;
        this.beneficios=beneficios;
        this.duracion=duracion;
    }
    
}
class CuentaCorriente extends Productos{
    constructor(fechaAdquisicion,beneficios,duracion){
        super(fechaAdquisicion,beneficios,duracion)
    }
    assign(){
        return  new CuentaCorriente(this.fechaAdquisicion ,this.beneficios, this.duracion);
    }
}
class CajaAhorro extends Productos{
    constructor(fechaAdquisicion,beneficios,duracion){
        super(fechaAdquisicion,beneficios,duracion)
    }
    assign(){
        return  new CajaAhorro(this.fechaAdquisicion ,this.beneficios, this.duracion);
    }
}
class SeguroDeVida extends Productos{
    constructor(fechaAdquisicion,beneficios,duracion){
        super(fechaAdquisicion,beneficios,duracion)
    }
    assign(){
        return  new SeguroDeVida(this.fechaAdquisicion ,this.beneficios, this.duracion);
    }
}
class SeguroDeHogar extends Productos{
    constructor(fechaAdquisicion,beneficios,duracion){
        super(fechaAdquisicion,beneficios,duracion)
    }
    assign(){
        return  new SeguroDeHogar(this.fechaAdquisicion ,this.beneficios, this.duracion);
    }
}


// 2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. Si intento crear una segunda oficina me debería devolver la primera instancia creada. Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.

    let _oficina;

    class Oficina{
        nombre;
        cantidadEmpleados;

        constructor(nombre,cantidadEmpleados){
            if(!_oficina){
                this.nombre=nombre;
                this.cantidadEmpleados;cantidadEmpleados;
                _oficina=this
            }
            else
                return _singleton
            console.log("Singleton class created")
        }

    }

    // 3 - Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza. Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder. ¿Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza.
   
    

    class Pizza{
        queso;
        tomate;
        masaFina;
        anana;
        constructor(queso=false,tomate=false,masaFina=false,anana=false){
            this.queso=queso;
            this.tomate=tomate;
            this.masaFina=masaFina;
            this.anana=anana;
        }

    setQueso(){
        this.queso=true;
        return this
    }
        
    setTomate(){
        this.tomate=true;
        return this
    }
    setMasaFina(){
        this.masaFina=true;
        return this
    }
    setAnana(){
        this.anana=true;
        return this
    }
    buildPizza(){
        return this;
    }
    mostrarPizza(){
        console.log(this)
    }

}

let pp= new Pizza;
pp.setQueso().setMasaFina().buildPizza().mostrarPizza();
// 4 - Supongamos que tengo 3 manzanas pero se diferencian cada una de su color (la primera es amarilla, la segunda roja y la tercera verde) y de su fecha de vencimiento (la primera vence en 5 dias, la segunda en 7 dias y la tercera en 10 dias). Para no instanciar cada sub clase de manzanas de manera separada crear la clase AppleFactory y dependiendo de los parámetros mandados, va a hacer una instancia de objeto. Aplicar el patrón de diseño Factory Method.


    