
// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto () {
        return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
    }

    formatearPrecio () {
        return `El precio de la ${this.nombre} es $${this.precio}`;
    }

}

const producto2 = new Producto('Monitor Curvo de 49"', 800); 
const producto3 = new Producto('Laptop"', 300); 


console.log(producto3.formatearPrecio());
console.log(producto3);