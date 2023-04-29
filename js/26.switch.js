const metodoPago = 'cheque';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va pagar con cheque');
        break;    
    default:
        console.log('Aún no has pagado');
        break;
}








