const fs = require('fs');
const objetoJSON = fs.readFileSync('./bicicletas.json', 'utf-8');

const JSONparseado = JSON.parse(objetoJSON);

module.exports = JSONparseado;

