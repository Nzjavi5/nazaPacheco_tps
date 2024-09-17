let palabraIngresada = 'GATO';
let traductor = '';

palabraIngresada = palabraIngresada.toLowerCase();

switch (palabraIngresada) {
    case 'perro':
        traductor = 'Dog';
        break;
    case 'gato':
        traductor = 'Cat';
        break;
    case 'puerta':
        traductor = 'Door';
        break;
    case 'ventana':
        traductor = 'Window';
        break;
    case 'mesa':
        traductor = 'Table';
        break;
    default:
        traductor = "La palabra ingresada es incorrecta";
        break;
}

console.log(traductor);
