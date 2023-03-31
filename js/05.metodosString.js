
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = "Monitor HD";
const email = 'maza_1506@hotmail.com'

//Para extensión
console.log(tweet.length); //Propiedad
console.log(producto2);

//IndexOf (Retorna Posición)
console.log(tweet.indexOf('JavaScript'))
console.log(producto2.indexOf('Table')) // -1 = No lo encontro
console.log(email.indexOf('@'))

//Includes (Retorna True o False)
console.log(tweet.includes('JavaScript'))
console.log(producto2.includes('Table')) // -1 = No lo encontro