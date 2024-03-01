import { cargaJson } from "./functions.js";

const botonFiltro = document.querySelector("#botonFiltro");
let precioMinInput = document.querySelector("#precioMinimo");
let categoriasInput = document.querySelector("#categoriasInput");
let marcaInput = document.querySelector("#marcasInput");
let url = "https://dummyjson.com/products";
let dummyJson;
let arrayCategorias = [];
let arrayMarcas = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    console.log("Página cargada");
    dummyJson = await cargaJson(url); // Espera a que la promesa se resuelva

    // Cargamos arrays de categorías y marcas
    dummyJson.products.forEach((product) => {
      if (!arrayCategorias.includes(product.category)) {
        arrayCategorias.push(product.category);
      }
      if (!arrayMarcas.includes(product.brand)) {
        arrayMarcas.push(product.brand);
      }
    });

    // Llenar selects de categorías y marcas
    arrayCategorias.forEach((categoria) => {
      let option = new Option(categoria, categoria);
      categoriasInput.add(option);
    });

    arrayMarcas.forEach((marca) => {
      let option = new Option(marca, marca);
      marcaInput.add(option);
    });
  } catch (error) {
    console.error("Error al cargar el JSON:", error);
  }
});

// Recoger datos del filtro
botonFiltro.addEventListener("click", (e) => {
  let precioMin =
    parseFloat(precioMinInput.value) >= 0
      ? parseFloat(precioMinInput.value)
      : 0;
  let categoria = categoriasInput.value;
  let brand = marcaInput.value;

  console.log(precioMin, categoria, brand);

  // Cargamos los productos que cumplen los filtros
  let filtrados = dummyJson.products.filter((product) => {
    return (
      product.price >= precioMin &&
      (categoria === "sin especificar" || product.category === categoria) && // "" representa "todas las categorías"
      (brand === "sin especificar" || product.brand === brand)
    ); // "" representa "todas las marcas"
  });

  console.log(filtrados); // Mostrar productos filtrados

  //Iteramos sobre productos filtrados para mostrarlos

  const contenedorProductos = document.querySelector(
    "#productosFiltrados .row"
  );
  contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos productos

  filtrados.forEach((producto) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4"; // Crea una columna para cada tarjeta para ajustarse a la estructura de 3 columnas

    const card = `
        <div class="card">
          <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
            <p class="card-text"><small class="text-muted">Marca: ${producto.brand}</small></p>
            <p class="card-text"><small class="text-muted">Categoría: ${producto.category}</small></p>
          </div>
        </div>
      `;

    col.innerHTML = card; // Añade la tarjeta a la columna
    contenedorProductos.appendChild(col); // Añade la columna al contenedor de productos
  });
});
