

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 20 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifono', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach - Para poder mostrar en pantalla

// carrito.forEach(function(producto){
//     console.log(producto.precio);
// });

// carrito.forEach(producto => console.log(producto.precio));

carrito.forEach(producto => console.log(producto));

// Map - Para crear un nuevo arreglo

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);


console.log(arreglo2);