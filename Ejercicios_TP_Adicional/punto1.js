import productos from './arrays.js';
productos.forEach(producto =>{
    console.log('Producto: ${producto.descripcion} - Precio: $${producto.precio}');
});