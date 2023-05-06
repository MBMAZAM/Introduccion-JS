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

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
}

//Instancia ↓
const producto2 = new Producto('Monitor Curvo de 49"', 800); //Parametros reales //Argumentos 
const producto3 = new Producto('Laptop"', 300); 
const producto4 = new Producto('Celular"', 2800, "LG"); 


console.log(producto2);
console.log(producto3);
console.log(producto4);

console.log(formatearProducto(producto2));


function Cliente(nombre, apellido) { 
    this.nombre = nombre;
    this.apellido = apellido;
}

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de : $ ${producto.precio}`;
}

const cliente = new Cliente('Mauricio', 'Maza');


console.log(cliente);

console.log(formatearProducto(cliente));