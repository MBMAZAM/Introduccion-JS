// "use strict" // Coorer JS en modo estricto -  Buenas practicas

// Objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}


/*

Object.freeze(producto); //Para congelar el Objeto - No permtie nada
producto.imagen = 'imagen.jpg'; //Agregar
producto.precio = 'Nuevo Precio'; // Modificar
delete producto.precio; // Eliminar 

console.log(Object.isFrozen(producto)); // Para saber si esta congelado 

*/


Object.seal(producto); // Solo permite modificar 

producto.precio = 'Nuevo Precio'; // Modificar




console.log(Object.isSealed(producto)); 

console.log(producto);