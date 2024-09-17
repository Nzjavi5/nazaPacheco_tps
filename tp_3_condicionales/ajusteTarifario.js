let pagoMes = 15000;
let consumoKWH = 450;
let porcentajeAumento = 20;
let calculoAumento = pagoMes * porcentajeAumento / 100;
let nuevoPago = pagoMes + calculoAumento;

let mensaje = consumoKWH >= 300 ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}Kwh,
en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $${nuevoPago}` : `Su hogar tuvo un consumo de ${consumoKWH}Kwh, su total a pagar es de $${pagoMes}.`

console.log(mensaje);
