// ============================================================
// Ejercicio 08 · Arrays de objetos (integrador)
// ============================================================
// El dueño quiere un resumen de todo el inventario en un solo objeto.
// Recibes un array de productos como los que creaste en el ejercicio 07.
//
// Crea la función resumenInventario(productos) que retorne:
//   - totalProductos  → cuántos productos hay en el array
//   - unidadesTotales → la suma del stock de todos
//   - valorInventario → la suma de (precio * stock) de cada producto
//   - agotados        → array con los NOMBRES de los productos con stock 0
//
// Ejemplo:
//   resumenInventario([
//     { nombre: "Café americano", precio: 4500, stock: 30 },
//     { nombre: "Capuchino", precio: 7000, stock: 0 },
//   ])
//   → { totalProductos: 2, unidadesTotales: 30,
//       valorInventario: 135000, agotados: ["Capuchino"] }
// ============================================================

function resumenInventario(productos) {
 let contU = 0;
 let Svalor =  0;
 let listaAgo = [];
  for (let i = 0; i < productos.length; i++){
    let producto = productos[i];
  
  contU = contU + producto.stock;
  Svalor = Svalor + (producto.precio * producto.stock);
  if(producto.stock === 0){
    listaAgo.push(producto.nombre);
  }}
  return {
    totalProductos: productos.length,
    unidadesTotales: contU,
    valorInventario: Svalor,
    agotados: listaAgo
  };
  
}
console.log(resumenInventario([
    { nombre: "Café americano", precio: 4500, stock: 30 },
   { nombre: "Capuchino", precio: 7000, stock: 0 },
  ]))
// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { resumenInventario };
