import { validaNombre } from "./funciones.js";

console.log("iniciando script");

/**@type {Element} */
const nombreIn =document.querySelector("#nombre")
/**@type {Element} */
const apellidoIn =document.querySelector("#apellido")
/**@type {Element} */
const telefonoIn =document.querySelector("#telefono")
/**@type {Element} */
const dniIn =document.querySelector("#dni")
/**@type {Element} */
const resultadoBoton = document.querySelector("#enviar")


resultadoBoton.addEventListener("click", (e)=>{
    console.log("2233");
    e.preventDefault()
    
    nombreIn.addEventListener('invalid', function(event) {
        // Previene la visualización del mensaje de error predeterminado del navegador
        event.preventDefault();
        console.log("3333");
        // Puedes personalizar este mensaje como quieras
        if (nombreIn.validity.valueMissing) {
            nombreIn.setCustomValidity('Por favor, rellena este campo.');
        } else {
            nombreIn.setCustomValidity('');
        }
        // Aquí puedes generar una alerta o cualquier otro tipo de notificación.
        alert(nombreIn.validationMessage);
    });



})
