let boton = document.querySelector("#script")

boton.addEventListener("click", ()=>{

    for (let index = 1; index <= 100; index++) {
    

        if (index%5 === 0 && index%3 === 0 ) {
            console.log("Fizz Buzz")
            }
        else if(index%5==0) {
            console.log("Buzz")
        }else if(index%3==0) {
            console.log("Fizz")
        }
        else {
            console.log(index)
        }
        
    }


} )

