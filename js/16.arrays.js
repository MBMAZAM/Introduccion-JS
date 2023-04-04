// Arrays o Arreglos

const numeros = [10,20,30,40,50]; // Este se usa más
console.table(numeros);


// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'); // Este se usa menos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
console.table(meses);


const arreglo = ['Hola', 10, true, 'Si', null, {nombre: 'Mauricio', trabajo: 'Programador'}, [1,2,3]];

console.table(arreglo);

// Accesder a los valores de un Arreglo

console.log(numeros[4])

//Conocer la extención de un Arreglo

console.log(meses.length);


//Iterador
numeros.forEach(function(numero){
    console.log(numero);
})






