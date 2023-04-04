// Objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}


// Forma Anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// Destructuring - Arreglo o Objeto

const {precio, nombreProducto} = producto;


console.log(precio);    
console.log(nombreProducto);  