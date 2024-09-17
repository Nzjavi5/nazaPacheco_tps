const fs = require('fs');
const path = require('path');

const importar = function (marca) {
    const archivos = ['figuras1.json', 'figuras2.json', 'figuras3.json'];
    let figuras = [];

    archivos.forEach(archivo => {
        const datos = fs.readFileSync(path.join(__dirname, 'datos', archivo), 'utf-8');
        const figurasArchivo = JSON.parse(datos);
        figuras = figuras.concat(figurasArchivo.filter(figura => figura.marca === marca));
    });

    return figuras;
};

module.exports = { importar };
