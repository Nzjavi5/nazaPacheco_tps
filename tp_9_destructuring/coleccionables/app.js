// Microdesafio 2:
const { importar } = require('./collectibles');

const hotToys = importar('Hot Toys'); // Importa las figuras de la marca Hot Toys 
const bandai = importar('Bandai'); // Importa las figuras de la marca Bandai
const starWars = importar('Star Wars'); // Importa las figuras de la marca Star Wars

// Paso 3:
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

// Paso 4:
const collectibles = {
    figuras: unifiedCollectibles,
    // Muestra todos los datos de las diferentes figuras almacenadas
    listFigures: function() {
        this.figuras.forEach(figura => {
            console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: ${figura.precio}, Stock: ${figura.stock}`);
        });
    },
    // Muestra todas aquellas figuras que corresponden a la marca recibida por parametro
    figuresByBrand: function(marca) {
        let lista = this.figuras.filter(figura => figura.marca === marca);
        lista.forEach(figura => {
            console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: ${figura.precio}, Stock: ${figura.stock}`);
        });
    }
};

collectibles.listFigures();

collectibles.figuresByBrand('Hot Toys');
collectibles.figuresByBrand('Bandai');
collectibles.figuresByBrand('Star Wars');
