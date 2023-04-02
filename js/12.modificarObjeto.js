// Objeto
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Agregar nuevas propiedades - Consulta
producto.imagen = "imagen.jpg";

// Eliminar propiedades - Para obtener algunos datos
delete producto.disponible;

console.log(producto);