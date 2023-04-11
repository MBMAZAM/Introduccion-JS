const numeros = [10,20,30,40,50]; // Este se usa más

// numeros[5] = 60; // No se usa

numeros.push(60); // Se agrega al final
numeros.unshift(-10,-20,-30); // Se agrega al inicio


console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);

// meses.pop(); //Elimina el ultimo arreglo
// meses.shift(); //Elimina el inicio del arreglo
// meses.splice(2, 1); // Eliminar, con indice y cantidad 
 
// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, "Junio"];


console.table(nuevoArreglo);


