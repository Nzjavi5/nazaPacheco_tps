// 1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function mostrarSiguientesDiez(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + i);
    };
};

//mostrarSiguientesDiez(5); 

// 2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
for (let i = 1; i <= 57; i += 3) {
    //console.log(i);
};

// 3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
let sumatoria = 0;
for (let i = 0; i <= 100; i++) {
    sumatoria += i;
};
//console.log(`La sumatoria de los números entre 0 y 100 es: ${sumatoria}`);

// 4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA.
function mostrarLetrasEnMayuscula(texto) {
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i].toUpperCase());
    };
};

//mostrarLetrasEnMayuscula('practicando el uso de los ciclos o bucles');

// 5. Crear una función que reciba como parámetro un array de números positivos. Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
function filtrarNumerosPares(numeros) {
    let numerosPares = numeros.filter(numero => numero % 2 === 0);
    return numerosPares;
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarNumerosPares(numeros));
