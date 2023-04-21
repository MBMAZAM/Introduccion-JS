// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar(5, 10);

// console.log(resultado + 5);

let total = 0;

function agregarCarrito(precio) {
    return total += precio; // total = total + precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}


total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);


console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es: ${totalApagar}`);
console.log('Hola');
console.log(`Hola como estas`);