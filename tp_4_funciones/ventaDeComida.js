let preciosHamburguesas = {
    'Carne a la parrilla': 1800,
    'Pollo': 1500,
    'Vegetariana': 1200
};

let preciosAdicionales = {
    'Jamón': 30,
    'Queso': 25,
    'Salsa de tomate': 5,
    'Mayonesa': 5,
    'Mostaza': 5,
    'Tomate': 15,
    'Lechuga': 10,
    'Cebolla': 10
};

function calcularTotal(hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let total = preciosHamburguesas[hamburguesa];

    if (jamon) { total += preciosAdicionales['Jamón']; }
    if (queso) { total += preciosAdicionales['Queso']; }
    if (salsaTomate) { total += preciosAdicionales['Salsa de tomate']; }
    if (mayonesa) { total += preciosAdicionales['Mayonesa']; }
    if (mostaza) { total += preciosAdicionales['Mostaza']; }
    if (tomate) { total += preciosAdicionales['Tomate']; }
    if (lechuga) { total += preciosAdicionales['Lechuga']; }
    if (cebolla) { total += preciosAdicionales['Cebolla']; }

    return total;
}

function mensajeUsuario(nombre, apellido, hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let total = calcularTotal(hamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    return `Estimado ${nombre} ${apellido}, el monto total a pagar por tu hamburguesa: ${hamburguesa},
    con los adicionales seleccionados es de: $${total}`;
}

let tipoHamburguesa = 'Carne a la parrilla';
let adicionales = [true, true, false, false, true, true, false, true];

let mensaje = mensajeUsuario('Daniel', 'Fuentes', tipoHamburguesa, ...adicionales);
console.log(mensaje);
