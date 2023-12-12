let ancho = 8
let alto = 8
let tablero=""
let boton = document.getElementById("boton")
let areaTablero = document.getElementById("tablero")

boton.addEventListener("click", (e) => {

    for (let index = 0; index < alto; index++) {
    
        if (index%2===0) {
            tablero+= "# # # # \n"
        }else{
            tablero+=" # # # #\n"
        }
        
    }
    console.log(tablero)
    areaTablero.innerText =""
    areaTablero.innerText = tablero
    tablero=""
})





