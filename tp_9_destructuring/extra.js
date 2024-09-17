// Paso 2: 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Paso 3:
const [primero, , segundo, , tercero, ...resto] = numeros;
const otrosNumeros = [numeros[1], numeros[3], ...resto];

console.log(primero); // posicion 0
console.log(segundo); // posicion 2
console.log(tercero); // posicion 4
console.log(otrosNumeros);

// Paso 4:
const mascota = {
    nombre: 'Bony',
    tipo: 'Perro',
    color: 'Dorado',
    raza: 'Golden retriever'
};

const { nombre, tipo, color, raza } = mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);
