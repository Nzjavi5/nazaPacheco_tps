// 1ra Funcion 
function convertirAMayusculas(string) {
    return string.toUpperCase();
}

console.log(convertirAMayusculas("hola mundo"));

// 2da Funcion
function tipoDeDato(parametro) {
    return typeof parametro;
}

console.log(tipoDeDato(42));  
console.log(tipoDeDato("Hola"));  
console.log(tipoDeDato(true));  

// 3ra Funcion
function calcularEdadPerro(edadHumana) {
    return edadHumana * 7;
}

console.log("Edad de su perro",calcularEdadPerro(5));

// 4ta Funcion
function calcularValorHora(salarioMensual, diasTrabajados, horasPorDia) {
    let horasTotales = diasTrabajados * horasPorDia;
    return salarioMensual / horasTotales;
}

console.log(calcularValorHora(30000, 20, 8));
