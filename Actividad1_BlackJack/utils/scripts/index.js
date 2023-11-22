//Creamos la baraja

let baraja = [];
let palos = ['T','C','P','D']
let boton = document.getElementById('btnstart');



boton.addEventListener( "click" , () => starGame())

function starGame() {

    //Funcion que inicia el juego

    //Creamos baraja
    for (let i = 0; i < palos.length; i++) {
        for (let j = 1; j <= 13; j++) {
            
            baraja.push(`${j}${palos[i]}`)
        }
    }

   barajada = mezclarBaraja(baraja)
    
    console.log(barajada)
    
}





function mezclarBaraja(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]]; // Intercambia elementos
    }

    return baraja
}



