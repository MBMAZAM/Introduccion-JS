// POO

/** Object Literal */

// Objeto, tiene muchas variables en una sola
// Clase: Contenedor datos, formas de todos los metodos y funciones que va tener un objeto

const producto = {
    nombre: 'Table',
    precio: 500
}

/** Object Contructor */

function Producto(nombre, precio, modelo) { //Parametros formales //Parametros
    this.nombre = nombre;
    this.precio = precio;
    this.modelo = modelo;
}

//Instancia ↓
const producto2 = new Producto('Monitor Curvo de 49"', 800); //Parametros reales //Argumentos 
const producto3 = new Producto('Laptop"', 300); 
const producto4 = new Producto('Celular"', 2800, "LG"); 

console.log(producto2);
console.log(producto3);
console.log(producto4);