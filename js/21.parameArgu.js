// Declaracion de Función

function sumar(numero1 = 0, numero2 = 0) { // Parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); //Argumentos


// Expresión de Función

const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);