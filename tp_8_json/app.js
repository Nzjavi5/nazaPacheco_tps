const bicicletas = require('./datoBici');

const dhBici = {
    bicicletas: bicicletas,
    // Busca la bici que elija, si no la encuentra retorna null
    buscarBici: function (id) {
        let bici = this.bicicletas.filter(bici => bici.id === id);
        return bici.length ? bici[0] : null;
    },
    // Vende la bici que elija, si no la encuentra retorna "Bicicleta no encontrada"
    venderBici: function (id) {
        let bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = 'si';
            return bici;
        } else {
            return "Bicicleta no encontrada";
        };  
    },
    // Muestra las bicicletas que aun no se han vendido
    biciParaLaVenta: function () {
        return this.bicicletas.filter(bici => bici.vendida === 'no');
    },
    // Muestra la suma total de las bicis vendidas
    totalDeVentas: function () {
        return `El total de las bicis vendidas es de $${this.bicicletas.filter(bici => bici.vendida === 'si').reduce((total, bici) => total + bici.precio, 0)}`;
    },
    // Muestra el listado de bicicletas con un aumento en su precio
    aumentoBici: function (porcentaje) {
        let aumento = this.bicicletas.map(bici => {
            return {
                ...bici,precio: bici.precio + (bici.precio * porcentaje / 100 )
            };
        });
        return aumento;
    },
    // Muestra las bicis que correspondan al rodado
    biciPorRodado: function (rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado);
    },
    // Muestra una lista de todas las bicicletas
    listarTodasLasBicis: function () {
        return this.bicicletas.forEach(bici => console.log(bici)
        );
    }
};

console.log(dhBici.buscarBici(1));
console.log(dhBici.venderBici(2));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());

// Desafio extra:
console.log(dhBici.aumentoBici(10));
console.log(dhBici.biciPorRodado(26));
dhBici.listarTodasLasBicis();
