let boton = document.querySelector("button")
let num1
let num2
let sigue = true

boton.addEventListener("click", (e) => {

num1 = parseInt(prompt("Introduce el primer numero con el que quieres operar"))
console.log(typeof(num1))
if (num1<0 || isNaN(num1) ) {
    alert("Solo son validos numeros y que sean mayores que 0")
    sigue = false
}
if(sigue) {
    num2 = parseInt(prompt("Introduce el segundo numero con el que quieres operar"))
}
if (num2<0 || isNaN(num2) && sigue) {
    alert("Solo son validos numeros y que sean mayores que 0")
    sigue=false
}

if (sigue) {

    prompt(`Los resultados son:
     Suma: ${num1+num2},
     Multiplicacion: ${num1*num2}
     resta: ${num1-num2}
     Division: ${num1/num2}`)
    
}


})