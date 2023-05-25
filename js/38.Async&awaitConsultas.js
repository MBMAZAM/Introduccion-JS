// 2 consultas

// function descargarNuevosClientes() {
//     return new Promise(resolve => {
//         console.log('Descargando clientes... espere...');

//         setTimeout( () => {
//             resolve('Los Clientes fueron descargados');
//         }, 2000);

//     });
// }

// function descargarUltimosPedidos() {
//     return new Promise(resolve => {
//         console.log('Descargando pedidos... espere...');

//         setTimeout( () => {
//             resolve('Los Pedidos fueron descargados');
//         }, 6000);

//     });
// }

// async function app() { //
//     try {
//         // const clientes = await descargarNuevosClientes();
//         // const pedidos = await descargarUltimosPedidos();
//         // console.log(clientes);
//         // console.log(pedidos);


//         const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
//         console.log(resultado[0]);
//         console.log(resultado[1]);

//     } catch (error) {
//         console.log(error);
//     }
// }

// app();


function descargarClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes... espere")
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 3000);
    })
}
 
function descargarPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos... espere")
        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 5000);
    })
}
 
 
async function appclientes() {
    try {
        const resultado= await descargarClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
async function apppedidos() {
    try {
        const resultado= await descargarPedidos();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
 
appclientes();
apppedidos();
console.log('.. el resto de código sigue su  ejecución')







