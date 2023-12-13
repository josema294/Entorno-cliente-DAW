let respuesta = document.querySelector("#respuesta")
let botonScript = document.querySelector("button")

botonScript.addEventListener("click",() => {

    /**
     * @type {string}
    */
    let frase = prompt("Introduce una frase para que sea evaluada")


    analisisFrase(frase)
})

 /**
     * @param {string} frase 
    */
function analisisFrase(frase) {

    
    
    if(frase.length<10){

        let newFrase = prompt("Lo siento la frase introducida debe ser mayor de 10 caracteres")
        analisisFrase(newFrase)

    }

    else {
        
        let numLetras = frase.length
        let numPalabras = (frase.split(" ")).length
        let numFrases = (frase.split(".")).length

        alert(`La frase introducida tiene ${numLetras} letras ${numPalabras} palabras y ${numFrases} frases `)
    }

    
}