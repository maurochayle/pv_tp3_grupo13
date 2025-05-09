import productos from './arrays.js';
productos.sort((a,b) => a.precio - b.precio);
console.log(productos);