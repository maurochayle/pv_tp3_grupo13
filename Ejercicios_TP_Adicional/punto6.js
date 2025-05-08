import productos from "./arrays.js";

const productoMasBarato = productos.reduce((min, producto) =>
    producto.precio < min.precio ? producto : min
);

const indice = productos.findIndex(producto => producto.precio === productoMasBarato.precio);
if (indice !== -1 ){
    productos.splice(indice, 1);
}

console.log("Producto eliminado: ", productoMasBarato);
console.log("Array actualizado: ", productos);