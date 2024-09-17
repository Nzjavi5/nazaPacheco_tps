let velocidad = 270;
let altura = 200;
let torreDeControl = '';

if ((velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300)) {
    torreDeControl = `La velocidad del avion es de ${velocidad}km/hr. La altura del avion es de ${altura}m.
    Puede iniciar el aterrizaje del avion.`;
} else {
    torreDeControl = "NO puede iniciar el aterrizaje";
}

console.log(torreDeControl);