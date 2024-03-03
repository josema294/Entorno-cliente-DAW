import { cargaJson } from "./functions.js";

const botonFiltro = document.querySelector("#botonFiltro");
let precioMinInput = document.querySelector("#precioMinimo");
let categoriasInput = document.querySelector("#categoriasInput");
let marcaInput = document.querySelector("#marcasInput");
let url = "https://dummyjson.com/products";
let dummyJson;
let arrayCategorias = [];
let arrayMarcas = [];
let importeCarrito = 0

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

  let filtrados = dummyJson.products.filter((product) => {
    return (
      product.price >= precioMin &&
      (categoria === "sin especificar" || product.category === categoria) &&
      (brand === "sin especificar" || product.brand === brand)
    );
  });

  console.log(filtrados);

  const contenedorProductos = document.querySelector("#productosFiltrados");
  contenedorProductos.innerHTML = "";

  filtrados.forEach((producto) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    const card = `
    <div class="card h-100">
      <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${producto.title}</h5>
        <p class="card-text">${producto.description}</p>
        <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
        <p class="card-text"><small class="text-muted">Marca: ${producto.brand}</small></p>
        <p class="card-text"><small class="text-muted">Categoría: ${producto.category}</small></p>
        <button class="btn btn-primary mt-auto agregar-carrito" data-product-id="${producto.id}">Agregar al Carrito</button>
      </div>
    </div>
  `;

    col.innerHTML = card;
    contenedorProductos.appendChild(col);
  });

  //Agregamos listeners a los botones de agregar al carrito
  const botonCarrito = document.querySelectorAll(".agregar-carrito");
  botonCarrito.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      let card = e.target.closest(".agregar-carrito");
      let productId = card.getAttribute("data-product-id");
      agregarAlCarrito(productId)
    });
  });
});

function agregarAlCarrito(productId) {
  
  const producto = dummyJson.products.find(
    (product) => product.id.toString() === productId
  );

  importeCarrito += producto.price
  console.log(`El valor del carrito aumenta en: ${producto.price} el total ahora es ${importeCarrito}`)

  if (producto) {
    const contenedorCarrito = document.querySelector("#carrito");
    const productoCarrito = document.createElement("div");
    productoCarrito.classList.add("producto-carrito", "mb-3");
    productoCarrito.setAttribute("data-product-id", producto.id);
    productoCarrito.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">Precio: $${producto.price}</p>
          <button class="btn btn-danger btn-sm quitar-producto" data-product-id="${producto.id}">Quitar</button>
        </div>
      </div>
    `;

    const botonQuitar = productoCarrito.querySelector(".quitar-producto");
    botonQuitar.addEventListener("click", () => {
      removerDelCarrito(productId);
    });

    contenedorCarrito.appendChild(productoCarrito);
  }
}

function removerDelCarrito(productId) {
  const contenedorCarrito = document.querySelector("#carrito");
  const productoParaEliminar = contenedorCarrito.querySelector(
    `[data-product-id="${productId}"]`
  );

  const producto = dummyJson.products.find(
    (product) => product.id.toString() === productId
  );

  if (productoParaEliminar) {
    importeCarrito -= producto.price
    console.log(`Importe total se reduce en: ${producto.price} el valor del carrito ahora es ${importeCarrito}`)
    contenedorCarrito.removeChild(productoParaEliminar);
    
  }
}

document.querySelector("#botonComprar").addEventListener("click", () => {
  const productosEnCarrito = document.querySelectorAll(".producto-carrito");
  let precioTotal = 0;

  productosEnCarrito.forEach((producto) => {
    const precio = parseFloat(producto.getAttribute("data-precio"));
  });

  alert(`El precio total es: $${precioTotal}`);

  const contenedorCarrito = document.querySelector("#carrito");
  contenedorCarrito.innerHTML = "";
});
