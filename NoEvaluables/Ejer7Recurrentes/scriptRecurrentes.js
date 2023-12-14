
let boton = document.querySelector("#script")


boton.addEventListener("click",()=>{

let input1 = prompt("introduzca un numero para operar ")
let input2 = prompt("introduzca el otro numero para operar")

let num1 = parseInt(input1)
let num2 = parseInt(input2)

if(!isNaN(num1) && !isNaN(num2)) {
    alert(`el resultado obtenido es para la suma: ${suma(num1,num2)} para la resta: ${resta(num1,num2)}
    para la multiplicacion: ${mult(num1,num2)} y para la division: ${div(num1,num2)}`)
}else{
    alert("Debe introducir numeros")
}


})

function suma(num1,num2) {
    return num1+num2
}
function resta(num1,num2) {
    return num1-num2
}
function mult(num1,num2) {
    return num1*num2
}
function div(num1,num2) {
    return num1/num2
}