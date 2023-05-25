// Async - Await
// 1 consulta

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los Clientes fueron descargados');
        }, 2000);

    });
}

async function app() { //
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este codigo no se bloquea');

// setInterval(function(){
//     console.log('set Interval....');
// }, 2000); // 5 segundos 

// setTimeout(function(){
//     console.log('set timeout....');
// }, 2000); // 5 segundos 