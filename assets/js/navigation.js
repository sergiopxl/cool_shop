"use strict"
console.log("navigation.js 1.1");

function doNavigation() {
  const apartados = [
    {
      literal: "Inicio",
      url: "../../pages/inicio/index.html"
    },
    {
      literal: "Categorias",
      url: "../../pages/categorias/index.html"
    },
    {
      literal: "Marcas",
      url: "../../pages/marcas/index.html"
    },
    {
      literal: "Registro",
      url: "../../pages/registro/index.html"
    }
  ];

  const navegacionContenedor = document.querySelector("#navegacion-principal ul");

  apartados.forEach(apartado => {
    const navegacionLi = document.createElement("li");
    const navegacionA = document.createElement("a");
    navegacionA.textContent = apartado.literal;
    navegacionA.href = apartado.url;
    navegacionLi.append(navegacionA);
    navegacionContenedor.append(navegacionLi);
  });

  // programacion menú responsive
  const botonMenuResponsive = document.querySelector("#navegacion-principal .icon-menu");
  botonMenuResponsive.addEventListener("click", () => {
    navegacionContenedor.classList.toggle("hidden-responsive");
  })

}

doNavigation();