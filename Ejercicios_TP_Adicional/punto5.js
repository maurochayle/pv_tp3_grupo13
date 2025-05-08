import productos from "./arrays.js";

productos.push({
    descripcion: "Notebook", precio: 39000.90
});
console.log("producto agregadoÑ:", productos[productos.length -1]);
console.log("Cantidad total: ", productos.length);