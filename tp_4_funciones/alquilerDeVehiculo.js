
function alquiler(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {

    let compacto = 14000;
    let mediano = 17000;
    let camioneta = 28000;

    let precioDeSilla = 1200;
    let precioTotalDeSilla = 0;

    let totalAPagar = 0;
    let mensaje = '';

    tipoDeVehiculo = tipoDeVehiculo.toLowerCase();

    switch (tipoDeVehiculo) {
        case 'compacto':
            if (sillaParaBebe > 0) {
                precioTotalDeSilla = precioDeSilla * sillaParaBebe;
                totalAPagar = compacto * diasDeAlquiler + precioTotalDeSilla;
                mensaje = `
            Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
            considerando los ${diasDeAlquiler} días utilizados y sumando la/s ${sillaParaBebe} silla/s para bebe,
            el monto total a pagar es de $${totalAPagar}.`;
            } else {
                totalAPagar = compacto * diasDeAlquiler;
                mensaje = `
            Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
            considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${totalAPagar}.`;
            }
            break;
        case 'mediano':
            if (sillaParaBebe > 0) {
                precioTotalDeSilla = precioDeSilla * sillaParaBebe;
                totalAPagar = mediano * diasDeAlquiler + precioTotalDeSilla;
                mensaje = `
            Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
            considerando los ${diasDeAlquiler} días utilizados y sumando la/s ${sillaParaBebe} silla/s para bebe,
            el monto total a pagar es de $${totalAPagar}.`;
            } else {
                totalAPagar = mediano * diasDeAlquiler;
                mensaje = `
            Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
            considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${totalAPagar}.`
            }
            break;
        case 'camioneta':
            if (sillaParaBebe > 0) {
                precioTotalDeSilla = precioDeSilla * sillaParaBebe;
                totalAPagar = camioneta * diasDeAlquiler + precioTotalDeSilla;
                mensaje = `
            Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
            considerando los ${diasDeAlquiler} días utilizados y sumando la/s ${sillaParaBebe} silla/s para bebe,
            el monto total a pagar es de $${totalAPagar}.`;
            } else {
                totalAPagar = camioneta * diasDeAlquiler;
                mensaje = `
            Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
            considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${totalAPagar}.`
            }
            break;
        default:
            mensaje = "Estimado cliente: elija el vehiculo que quiera alquilar";
            break;
    }
    return mensaje;
}

console.log(alquiler('Compacto', 3, 2));
