boton = document.getElementById("script")

boton.addEventListener("click", () => {

    let fechaIngresada =  prompt("Por favor introduzca su fecha de cumpleaños (formato YYYY-MM-DD)")

    if (Date.parse(fechaIngresada)) {

        let fechaUsuario = new Date(fechaIngresada);
        let diferencia = new Date() - fechaUsuario
        let diferenciaDias =  Math.floor(diferencia / (1000 * 60 * 60 * 24))
        alert(`Han pasado ${diferenciaDias} desde tu cumpleaños`)
        
    } else {
        alert("Por favor, ingresa una fecha válida.");
    }




})