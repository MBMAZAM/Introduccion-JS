
//This



const reservacion = {
    nombre: 'Mauricio',
    apellido: 'Maza',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre}, reservo y su cantidad a pagar es de ${this.total}`);
    }
}

// Se debe colocar una variable
window.nombre = 'Azucena';
window.total = 100;


const reservacion2 = {
    nombre: 'Camila',
    apellido: 'Santisteban',
    total: 2800,
    pagado: false,
    informacion: () => {
        console.log(`El cliente ${this.nombre}, reservo y su cantidad a pagar es de ${this.total}`);
    }
}
// No sale sino se declara la variale de windows, el arrow funcion hace referencia al global
const reservacion22 = {
    name: 'Camila',
    informacion: () => {
        console.log(`${this.name}`);
    }
}


const reservacion3 = {
    nombre: 'Pedro',
    apellido: 'Rivas',
    total: 200,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${reservacion3.nombre}, reservo y su cantidad a pagar es de ${reservacion3.total}`);
    }
}


reservacion.informacion();
reservacion2.informacion();
reservacion22.informacion();
reservacion3.informacion();
