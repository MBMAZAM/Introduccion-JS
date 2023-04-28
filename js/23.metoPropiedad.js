
// Metodo de Propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproducir Canción con el ID: ${id}`);
    },
    pausar : function() {
        console.log('Pausando...');
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproduciendoPlaylist : function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion ${id}`);
}



console.log(reproductor);

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproduciendoPlaylist('Heavy Metal');