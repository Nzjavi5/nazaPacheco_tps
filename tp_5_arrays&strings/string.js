// 2do paso: Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick', ‘Elvis’, ‘Thor: amor y trueno’.
let peliculas = ["Turno de dia", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

// 3er paso:
function colocarPeliculaPrimero(pelicula, array) {
    array.pop();
    let peliculaEnMayusculas = pelicula.toUpperCase();
    array.unshift(peliculaEnMayusculas);
    return array;
};

peliculas = colocarPeliculaPrimero('Thor: amor y trueno', peliculas);
console.log(peliculas);

/* Una vez terminada la actividad, nos indican que debemos crear una cadena de texto
para las siguientes películas próximas a estrenar:
○ Counter-Strike
○ NOP
○ Vértigo
○ Nick
○ Avatar.
Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en cuenta que cada elemento debe estar separado por una coma */
let proximasPeliculas = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'].join(', ');
//console.log(proximasPeliculas);

/* Una vez creada la estructura, una de las programadoras del equipo indica que la
primera película incorporada a la estructura no es una película sino un video
juego. Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la
estructura. */
let peliculasEstreno = proximasPeliculas.split(', ').slice(1);
//console.log(peliculasEstreno);

// 4to paso:
function combinarPeliculas(array1, array2) {
    return array1.concat(array2);
};

let todasLasPeliculas = combinarPeliculas(peliculas, peliculasEstreno);
console.log(todasLasPeliculas); 