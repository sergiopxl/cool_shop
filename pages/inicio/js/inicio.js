"use strict"
console.log("inicio.js 1.1")

function inicioInit(){
  const miniatura = document.querySelector(".producto-miniatura");
  const contenedor = document.querySelector(".listado-productos");
  const cantidad = 11;
  for(let i = 0; i<cantidad; i++){
    const nuevoProducto = miniatura.cloneNode(true);
    contenedor.append(nuevoProducto);
  }
}

inicioInit();