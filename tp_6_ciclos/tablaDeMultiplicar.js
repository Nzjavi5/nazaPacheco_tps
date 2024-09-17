// Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de generar de manera automática la tabla de multiplicar del 1 al 10.
function mostrarTablaDeMultiplicar() {
    console.log("Tabla de multiplicar");
    console.log("--------------------");

    let num1 = 1;
    let num2 = 1;

    do {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        num2++
    } while (num1 <= 10 && num2 <= 10);
};

mostrarTablaDeMultiplicar();
