/**@ts-check*/

console.log("iniciando script");

/**@type {Element} */
const nombreIn = document.querySelector("#nombre");
/**@type {Element} */
const apellidoIn = document.querySelector("#apellido");
/**@type {Element} */
const telefonoIn = document.querySelector("#telefono");
/**@type {Element} */
const dniIn = document.querySelector("#dni");
/**@type {Element} */
const resultadoBoton = document.querySelector("#enviar");
/**@type {Element} */
const spanNombre = document.querySelector("#validaNombre");
/**@type {Element} */
const spanApellido = document.querySelector("#validaApellido");
/**@type {Element} */
const spanTelefono = document.querySelector("#validaTelefono");
/**@type {Element} */
const spanDNI = document.querySelector("#validaDNI");

const arraySpans = document.querySelectorAll(".validator")
const arrayInputs = document.querySelectorAll(".form-control")

resultadoBoton.addEventListener("click", (e) => {
  let validacionExitosa = true;
  e.preventDefault();

  //checkNombre
  if (contieneEspeciales(nombreIn.value) || contieneNumeros(nombreIn.value)) {
    spanNombre.textContent =
      "El nombre no puede contener numeros o caracteres especiales";
    nombreIn.className += " bg-light";
    validacionExitosa = false;
  } else if (nombreIn.value.length <= 0) {
    spanNombre.textContent = "El nombre no estar vacio";
    nombreIn.className += " bg-light";
    validacionExitosa = false;
  }

  if (
    contieneEspeciales(apellidoIn.value) ||
    contieneNumeros(apellidoIn.value)
  ) {
    spanApellido.textContent =
      "El apellido no puede contener numeros o caracteres especiales";
    apellidoIn.className += " bg-light";
    validacionExitosa = false;
  } else if (apellidoIn.value <= 0) {
    spanApellido.textContent = "El nombre no puede estar vacio";
    apellidoIn.className += " bg-light";
    validacionExitosa = false;
  }

  if (telefonoIn.value.length <= 0) {
    spanTelefono.textContent = "Debes rellenar el campo del telefono";
    telefonoIn.className += " bg-light";
    validacionExitosa = false;
  } else if (
    contieneLetras(telefonoIn.value || contieneEspeciales(telefonoIn.value))
  ) {
    spanTelefono.textContent = "El telefono solo puede tener numeros";
    telefonoIn.className += " bg-light";
    validacionExitosa = false;
  } else if (telefonoIn.value.length != 9) {
    spanTelefono.textContent += "El telefono debe tener 9 caracteres";
    validacionExitosa = false;
  }

  if (!validaDNI(dniIn.value)) {
    spanDNI.textContent =
      "Formato de DNI incorrecto, debe tener 8 numeros seguido de una letra sin guiones entre medias.";
    dniIn.className += " bg-light";
    validacionExitosa = false;
  }

  if (validacionExitosa) {
    console.log("todo exitoso");
   
    arraySpans.forEach(element => {
        element.textContent=""
    });

    arrayInputs.forEach(element =>{
        element.className = element.className.replace(bg-light, "")

    })


  } else {
    console.log("validacion fallida");

  }
});

function contieneEspeciales(string) {
  const especiales = "!@#$%^&*()_+{}|:\"<>?-=[]\\;',./`~";
  return Array.from(especiales).some((caracter) => string.includes(caracter));
}

function contieneNumeros(string) {
  const numbers = "0123456789";

  return Array.from(numbers).some((caracter) => string.includes(caracter));
}

function contieneLetras(string) {
  //Compruebo todas las letras con una expresion regular
  return /[a-zA-Z]/.test(string);
}
/**
 *
 * @param {String} dni el dni a evaluar, sin simbolos entre numeros y letras
 * @returns {Boolean} True si el DNI se ha validado correctamente
 */
function validaDNI(dni) {
  let validacion = false;

  if (dni.length != 9) {
    return validacion;
  }

  for (let i = 0; i < 8; i++) {
    if (!contieneNumeros(dni[i])) {
      return validacion; // Retorna false si algún carácter no es un número
    }
  }

  if (!contieneLetras(dni.charAt(8))) {
    return validacion;
  }

  validacion = true;
  return validacion;
}
