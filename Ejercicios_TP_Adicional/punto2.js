import productos from './arrays.js';
const productosMayoresA20 = productos.filter(producto => Number(producto.precio) > 20)
console.log(productosMayoresA20);