
// const usuarioAutentico = new Promise(function(){
// });

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve('Usuario Autenticado'); // El PROMISE se cumple
    } else {
        reject('No se puede iniciar sesión'); // No se cumple
    }
});


console.log(usuarioAutenticado); // Para ver el estado del PROMISE

usuarioAutenticado
    .then(function(resultado) {
        console.log(resultado);
    })
    .catch(function(error){
        console.log(error);
    })

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// En los Promises existen 3 valores
// Pending: No se ha cumpliado pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir