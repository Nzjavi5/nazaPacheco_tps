let productos = ['Lavadora', 'Refrigador', 'Licuadora', 'Microondas', 'Televisor', 'Secadora'];

// Acceder de manera arbitraria a diferentes elementos del array
console.log(productos[1]);

// Extraer el primer elemento del array y agregarlo al final del mismo
let primerProducto = productos.shift();
productos.push('Lavadora');
console.log(productos);

// Agregar al final del array dos (2) nuevos productos
productos.push('Licuadora','Cafetera');
console.log(productos);

// Mostrar por la consola la cantidad de elementos que contiene el array
console.log("Cantidad de elementos: ",productos.length);

// Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array
let productoBuscado = productos.includes('Televisor') ? "Producto encontrado" : "El producto buscado no existe";
console.log(productoBuscado);

// Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco
let separadoPorEspacios = productos.join(' ');
console.log(separadoPorEspacios);

// Determinar la cantidad de elementos que posee la cadena de texto obtenida
let cantidadDeElementos = separadoPorEspacios.split(' ');
console.log("Cantidad de elementos del texto obtenido: ", cantidadDeElementos.length);

// Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello
let productosReemplazados = separadoPorEspacios.replace('Cafetera','Aspiradora');
productosReemplazados = productosReemplazados.replace('Licuadora', 'Cafetera')
console.log(productosReemplazados);
// Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto.
let productos2 = productosReemplazados.split(' ');
console.log(productos2);

