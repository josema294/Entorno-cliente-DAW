let boton = document.getElementById("activaScript")

boton.addEventListener("click",()=>{

  

  let promt = prompt("Selecciones un numero de filas a mostrar por consola, porfavor ha de ser un numero natural")

  while (promt<0) {
    promt = prompt("Selecciones un numero de filas a mostrar por consola, porfavor ha de ser un numero natural")
  }

  let show = ""
  for (let filaindex = 0; filaindex < promt; filaindex++) {
    
    
    show += "+"
    console.log(`${show}`)
   
  }

})

