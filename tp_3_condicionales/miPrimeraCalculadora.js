let operador = 'dividir';
let num1 = 2;
let num2 = 4;
let resultado = 0;
let respuesta = '';


switch (operador) {
    case 'sumar':
        resultado = num1 + num2;
        respuesta = `El resultado de sumar ${num1} + ${num2} es ${resultado}`;
        break;
    case 'restar':
        resultado = num1 - num2;
        respuesta = `El resultado de restar ${num1} - ${num2} es ${resultado}`;
        break;
    case 'multiplicar':
        resultado = num1 * num2;
        respuesta = `El resultado de multiplicar ${num1} * ${num2} es ${resultado}`;
        break;
    case 'dividir':
        resultado = num1 / num2;
        respuesta = `El resultado de dividir ${num1} / ${num2} es ${resultado}`;
        break;
    default:
        respuesta = 'Las operaciones aceptadas son: sumar-restar-multiplicar-dividir';
        break;
}

console.log(respuesta);
