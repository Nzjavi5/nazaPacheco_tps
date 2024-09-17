const peliculas = require('./proyecto/peliculas');
const fs = require('fs');

// Microdesafio 1 (paso C): Muestra al usuario un listado con el detalle de cada una de nuestras películas favoritas.
function mostrarPeliculas(peliculas) {
    
    for (let i = 0; i < peliculas.length; i++) {
        console.log(`ID: ${peliculas[i].id}`);
        console.log(`Rating: ${peliculas[i].rating}`);
        console.log(`Premios: ${peliculas[i].awards}`);
        console.log(`Duración: ${peliculas[i].length} minutos`);
        console.log(`Precio: $${peliculas[i].price}`);
        console.log(`Género: ${peliculas[i].genre}`);
        console.log('--------------------');
    }
};

mostrarPeliculas(peliculas);

// Microdesafio 2 (paso 3 y 4) 
const archivo = fs.readFileSync('./mensaje.txt', 'utf-8');

console.log(archivo);

