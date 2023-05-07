// POO

/** Object Literal */

// Objeto, tiene muchas variables en una sola
// Clase: Contenedor datos, formas de todos los metodos y funciones que va tener un objeto

const producto = {
    nombre: 'Table',
    precio: 500
}

/** Object Contructor */
// 1 CREAMOS OBJETO
function Producto(nombre, precio, modelo) { //Parametros formales //Parametros
    this.nombre = nombre;
    this.precio = precio;
    this.modelo = modelo;
}

//2. . INSTANCIA PARA AGREGAR PROPIEDAD AL OBJETO ↓

const producto4 = new Producto('Celular"', 2800, "LG"); 

//3. CREAMOS UN PROTOTIPO PARA CAMBIAR LA FORMA DEL TEXTO
// Crear funciones que solo se utilizan en un objeto en especifico 
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
}

//LLAMAMOS EN LA CONSOLA EL OBJETO PRODUCTO CON EL FORMATO DEL PROTOTIPO
console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());



/** --------------------------------------------------- */
function Cliente(nombre, apellido) { 
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


const cliente = new Cliente('Mauricio', 'Maza');


console.log(cliente); 

console.log(cliente.formatearCliente());

