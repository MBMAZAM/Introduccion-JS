
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    obtenerPrecio(){
        console.log(this.precio)
    }
}

// Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('Y si hay una existencia');
    }
}


const libro = new Libro('JavaScript la Revolución', 120, '91031398138139');
const producto2 = new Producto('Monitor Curvo de 49"', 800); 

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());