//Botones LS
const botonLS1 = document.querySelector("#submitLS");
const botonLS2 = document.querySelector("#submitObjLS");
const botonBorradoLS = document.querySelector("#botonBorrarLS");
//Botones SS
const botonSS1 = document.querySelector("#submitSS");
const botonSS2 = document.querySelector("#submitObjSS");
const botonBorradoSS = document.querySelector("#botonBorrarSS");
//Botones Cookies
const botonC = document.querySelector("#submitC");
const botonBorrarC = document.querySelector("#botonBorrarC");

//combobox
const selectorLS = document.querySelector("#selectorLS");
const selectorSS = document.querySelector("#selectorSS");
const selectorC = document.querySelector("#selectorC");

//Local Storage
const actualesLS1 = document.querySelector("#infoLS1");
const actualesLS2 = document.querySelector("#infoLS2");
const actualesLS3 = document.querySelector("#infoLS3");
//Sesion Storage
const actualesSS1 = document.querySelector("#infoSS1");
const actualesSS2 = document.querySelector("#infoSS2");
const actualesSS3 = document.querySelector("#infoSS3");
//cookies
const infoC1 = document.querySelector("#infoC1");
const infoC2 = document.querySelector("#infoC2");
const infoC3 = document.querySelector("#infoC3");

//valores actuales
actualesLS1.value = localStorage.key(localStorage.length - 1);
actualesLS2.value = localStorage.key(localStorage.length - 2);
actualesLS3.value = localStorage.key(localStorage.length - 3);

actualesSS1.value = sessionStorage.key(sessionStorage.length - 1);
actualesSS2.value = sessionStorage.key(sessionStorage.length - 2);
actualesSS3.value = sessionStorage.key(sessionStorage.length - 3);

let cookiesTodas = document.cookie;
let arrayCookies = cookiesTodas.split("; ");
let mapaCookies



//Creo un mapa de cookies para trabajar con ellas mas facil:


arrayCookies = document.cookie.split("; ");
mapaCookies = new Map();
arrayCookies.forEach((element)=>{

    let clave = element.split("=")[0]
    let valor = element.split("=")[1]
    mapaCookies.set(clave,valor)
})


// borrado selector escogido LS

botonBorradoLS.addEventListener("click", (e) => {
  e.preventDefault();
  let aBorrar = selectorLS.options[selectorLS.selectedIndex].text;
  console.log(`seleccionado ${aBorrar}`);
  localStorage.removeItem(aBorrar);
  if (!localStorage.getItem(aBorrar)) {
    console.log(`El elemento ${aBorrar} ha sido eliminado correctamente.`);
    selectorLS.options.remove(selectorLS.selectedIndex);
  } else {
    console.log(`No se pudo eliminar el elemento ${aBorrar}.`);
  }
});
//borrado selector escogido SS
botonBorradoSS.addEventListener("click", (e) => {
  e.preventDefault();
  let aBorrar = selectorSS.options[selectorLS.selectedIndex].text;
  console.log(`seleccionado ${aBorrar}`);
  sessionStorage.removeItem(aBorrar);
  if (!sessionStorage.getItem(aBorrar)) {
    console.log(`El elemento ${aBorrar} ha sido eliminado correctamente.`);
    selectorSS.options.remove(selectorSS.selectedIndex);
  } else {
    console.log(`No se pudo eliminar el elemento ${aBorrar}.`);
  }
});

//agrega LS
botonLS1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Boton LS pulsado");
  individualLS();
});
//agrega LS
botonLS2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Boton LSobjeto pulsado");
  objetoLS();
});
//agrega SS
botonSS1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Boton SS pulsado");
  individualSS();
});
//agrega SS
botonSS2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Boton objeto SS pulsado");
  objetoSS();
});
//agrega C
botonC.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("pulsado boton cookies");
  cookies();



});

//Para setear LS par clave valor
function individualLS() {
  const claveLS = document.querySelector("#inputClaveLS").value;
  const valorLS = document.querySelector("#inputValorLS").value;

  localStorage.setItem(claveLS, valorLS);
}

//Para setear LS objeto json
function objetoLS() {
  const nombreLS = document.querySelector("#nombreLS").value;
  const apellidoLS = document.querySelector("#apellidoLS").value;
  const telefonoLS = document.querySelector("#telefonoLS").value;

  let objetoLS = {
    nombre: nombreLS,
    apellido: apellidoLS,
    telefono: telefonoLS,
  };

  localStorage.setItem("objetoLS", JSON.stringify(objetoLS));
}

//Para setear Session Storage
function individualSS() {
  let claveSS = document.querySelector("#inputClaveSS").value;
  let valorSS = document.querySelector("#inputValorSS").value;

  sessionStorage.setItem(claveSS, valorSS);
}

function objetoSS() {
  let nombreSS = document.querySelector("#nombreSS").value;
  let apellidoSS = document.querySelector("#apellidoSS").value;
  let telefonoSS = document.querySelector("#telefonoSS").value;

  let objetoSS = {
    nombre: nombreSS,
    apellidos: apellidoSS,
    telefono: telefonoSS,
  };

  sessionStorage.setItem("ObjetoSS", Json.stringify(objetoSS));
}

function objetoSS() {
  let nombreSS = document.querySelector("#nombreSS").value;
  let apellidoSS = document.querySelector("#apellidoSS").value;
  let telefonoSS = document.querySelector("#telefonoSS").value;

  let datosUsuarioSS = {
    nombre: nombreSS,
    apellido: apellidoSS,
    telefono: telefonoSS,
  };

  sessionStorage.setItem("datosUsuarioSS", JSON.stringify(datosUsuarioSS));
}

//Por ultimo con cookies

function cookies() {
  let claveCookie = document.querySelector("#inputClaveC").value;
  let valorCookie = document.querySelector("#inputValorC").value;
  let fechaCookie = document.querySelector("#inputExpiraC").value;
  let cookie = (document.cookie =
    claveCookie + "=" + valorCookie + ";" + fechaCookie + ";path=/");
}

//For para rellenar el combobox LS
for (let index = 0; index < localStorage.length; index++) {
  let option = document.createElement("option");
  option.text = localStorage.key(index);
  option.value = localStorage.getItem(localStorage.key(index));
  selectorLS.add(option);
}
//For para rellenar el SS
for (let index = 0; index < sessionStorage.length; index++) {
  let option = document.createElement("option");
  option.text = sessionStorage.key(index);
  option.value = sessionStorage.getItem(localStorage.key(index));
  selectorSS.add(option);
}

//For para rellenar el selector cookies

mapaCookies.forEach((valor, nombre) => {
    let option = document.createElement("option");
    option.text = nombre
    option.value= nombre
    selectorC.add(option);
    
   
});


//Fijamos la informcion de cookies:
let arrayMostrador = []
mapaCookies.forEach((elemento,clave)=>{
    
    arrayMostrador.push(`Cookie: ${clave} ${elemento}`)
    
})

infoC1.value = arrayMostrador.pop()
infoC2.value = arrayMostrador.pop()
infoC3.value = arrayMostrador.pop()

botonBorrarC.addEventListener("click",(e)=>{

    e.preventDefault()

    let aBorrar = selectorC.value
    console.log(aBorrar);

    document.cookie = aBorrar + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';


})