// 1. Crear un array que contenga las operaciones bancarias realizadas por el cliente, tomando en cuenta que los depósitos serán representados por valores positivos y los retiros por valores negativos.
let operaciones = [1000, -500, 2000, -1500, 3000, -2000];

// 2. Crear una función (Callback) que reciba como parámetro el array creado. La función tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo actual de retiros y el saldo actual del cliente.
function calcularSaldos(operaciones) {

    let totalDepositos = 0;
    let totalRetiros = 0;

    operaciones.forEach(operacion => {
        if (operacion > 0) {
            totalDepositos += operacion;
        } else {
            totalRetiros += operacion;
        }
    });

    let saldoActual = totalDepositos + totalRetiros;

    return {
        totalDepositos,
        totalRetiros,
        saldoActual
    };
};

// 3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así como el array que contiene las operaciones bancarias. Esta función tendrá la responsabilidad de retornar el nombre y apellido del cliente y el saldo total de depósitos, el saldo actual de retiros y el saldo actual.
function mostrarResultados(nombre, apellido, operaciones) {
    let { totalDepositos, totalRetiros, saldoActual } = calcularSaldos(operaciones);
    let mensaje = '';

    mensaje = `Estimada ${nombre} ${apellido}:
    El monto total de los depósitos es de: $${totalDepositos}.
    El monto total de los retiros es de: $${Math.abs(totalRetiros)}.
    Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}.`;

    return mensaje;
};

console.log(mostrarResultados('Gloria', 'Medina', operaciones));
