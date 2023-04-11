const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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


// forEach

meses.forEach(function(mes){
    if(mes == 'Marzo'){
         console.log('Marzo si existe');
    }
       
})

// Include - Para comprobar si existe, Funciona para lineas (Objeto)

let resultado = meses.includes('Marzo');
console.log(resultado);

// Some ideasl para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular Pro'
})


// Reduce

resultado = carrito.reduce(function(total, producto){  // Total = Acumulador y producto.precio = Precio actual
    return total + producto.precio
}, 0)

// resultado = carrito.reduce((total, producto) => total + producto.precio, 0) = Manera Sencilla

console.log(resultado);

// Filter   

resultado = carrito.filter(function(producto){  // Total = Acumulador y producto.precio = Precio actual
    return producto.precio > 400
}, 0)

console.log(resultado);


resultado = carrito.filter(function(producto){  // Total = Acumulador y producto.precio = Precio actual
    return producto.nombre !== 'Celular'
}, 0)

console.log(resultado);