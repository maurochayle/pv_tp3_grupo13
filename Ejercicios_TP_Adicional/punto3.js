import productos from './arrays.js';
const productosConIVA = productos.map(producto => {
    return {
        descripcion: producto.descripcion,
        precio: (producto.precio * 1.21).toFixed(2)
    };
});
console.log(productosConIVA);