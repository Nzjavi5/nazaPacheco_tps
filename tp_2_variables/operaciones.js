let num1 = 20;
let num2 = 12;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

console.log(`--- Resultados ---
 Suma: ${num1} + ${num2} = ${suma}
 Resta: ${num1} - ${num2} = ${resta}
 Multiplicación: ${num1} * ${num2} = ${multiplicacion}
 División: ${num1} / ${num2} = ${division}
 Modulo: ${num1} % ${num2} = ${modulo}`);

let mayor1 = num1 > num2;
let mayor2 = num2 > num1;
let menor1 = num1 < num2;
let menor2 = num2 < num1;

console.log(`¿Cual de los valores es mayor?
    ${num1} > ${num2} es ${mayor1}
    ${num2} > ${num1} es ${mayor2} 
¿Cual de los valores es menor?
    ${num1} < ${num2} es ${menor1}
    ${num2} < ${num1} es ${menor2}`);
