import { cargaJson } from "./functions.js";

const botonFiltro = document.querySelector("#botonFiltro");
let precioMinInput = document.querySelector("#precioMinimo");
let categoriasInput = document.querySelector("#categoriasInput");
//let categoria = document.querySelector("#categoria")
let marcaInput = document.querySelector("#marca");
let url = "https://dummyjson.com/products";
let dummyJson;
let arrayCateogorias = [];
let arrayMarcas = [];
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada");

  // cargamos el json
  cargaJson(url).then((json) => {
    dummyJson = json;

    //Cargamos array categorias
    dummyJson.products.forEach((product) => {
      if (!arrayCateogorias.includes(product.category)) {
        arrayCateogorias.push(product.category);
        
      }
    });

    //cargamos array marcas
    dummyJson.products.forEach((product) => {
      if (!arrayMarcas.includes(product.brand)) {
        arrayMarcas.push(product.brand);
        }
    });

   
    // Ahora, llenamos el select de categorías aquí, asegurándonos de que se haga después de que arrayCategorias esté lleno
    arrayCateogorias
      .forEach((categoria) => {
        let option = new Option(categoria, categoria.toLowerCase());
        categoriasInput.add(option);

        // lo mismo con la select de marcas
        arrayCateogorias.forEach((categoria) => {
          let option = new Option(categoria, categoria.toLowerCase());
          categoriasInput.add(option);
        });
        //Remeuve la opcion por defecto
        categoriasInput.remove("");
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });

    //Aprovechamos la carga para tambien cargar las categorias acorde a los valores que hay de categorias
  });

  botonFiltro.addEventListener("click", (e) => {
    //Con esto hacemos que el precio minimo tenga que ser un numero y ademas un valor negativo equivale a un filtro de 0 euros
    let precioMin =
      !isNaN(parseFloat(precioMinInput.value)) && precioMinInput.value >= 0
        ? precioMinInput.value
        : 0;
    console.log(precioMin);

    //Cargamos las opciones de categorias con los datos del json:

    let categoria = categoriasInput.value;
    console.log(categoria);
  });
});
