const botonLS1 = document.querySelector("#submitLS")
const botonLS2 = document.querySelector("#submitObjLS")
//Local Storage
const actualesLS1 = document.querySelector("#infoLS1")
const actualesLS2 = document.querySelector("#infoLS2")
const actualesLS3 = document.querySelector("#infoLS3")
//Sesion Storage
const actualesSS1 = document.querySelector("#infoSS1")
const actualesSS2 = document.querySelector("#infoSS2")
const actualesSS3 = document.querySelector("#infoSS3")
//cookies
const infoC1 = document.querySelector("#infoLS1")
const infoC2 = document.querySelector("#infoLS2")
const infoC3 = document.querySelector("#infoLS3")

actualesLS1.value = localStorage.key(localStorage.length-1)
actualesLS2.value = localStorage.key(localStorage.length-2)
actualesLS3.value = localStorage.key(localStorage.length-3)



botonLS1.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("Boton LS pulsado")
    individualLS();
    
})

botonLS2.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("Boton LSobjeto pulsado")
    objetoLS();
    
})


function individualLS() {

const claveLS = document.querySelector("#inputClaveLS").value
const valorLS = document.querySelector("#inputValorLS").value

localStorage.setItem(claveLS,valorLS)

    
}

function objetoLS() {

    
        
}