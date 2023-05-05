// For Loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`El Número ${i} es PAR`);
//     } else {
//         console.log(`El Número ${i} es IMPAR`);
//     }
// }

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);    
}

// While Loop

//let i = 0; // Indice

// while (i <= 100) { // Condicion
    
//     if (i % 2 === 0) {
//         console.log(`El Número ${i} es PAR`);
//     } else {
//          console.log(`El Número ${i} es IMPAR`);
//     }

//     i++; // Incremento
// }

// while (i < carrito.length) { // Condicion
    
//     console.log(carrito[i].nombre);

//     i++; // Incremento
// }


// Do While Loop

let i = 0;

do {
    console.log(i);

    i++;
} while (i < 10);