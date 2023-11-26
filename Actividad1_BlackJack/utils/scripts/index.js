const baraja = []
let jugador = ""
let palos = ['T','C','P','D']
let boton = document.getElementById('btnstart')
let barajada = [];
let marcadorBanca = 0
let marcadorJugador = 0;
const zonaBanca = document.getElementById('banca')

boton.addEventListener( "click" , () => starGame())

function starGame() {
    
    jugador = prompt("Por favor, introduce tu nombre:") 
    document.getElementById("nombrejugador").textContent = `Jugador: ${jugador}`
    creaBaraja()
    barajada = mezclarBaraja(baraja)

    //La banca empieza a jugar

    while (marcadorBanca<=17) {

    const carta = new Carta(barajada.pop())
    marcadorBanca += carta.valor()
    let imagen = document.createElement('img')
    imagen.src= carta.img
    zonaBanca.appendChild(imagen)
        
    }

     
}

function creaBaraja() {

    for (let i = 0; i < palos.length; i++) {
        for (let j = 1; j <= 13; j++) {
           
            baraja.push(`${j}${palos[i]}`)
        }
    }
}

function mezclarBaraja(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]]; // Intercambia elementos
    }
    return baraja
}
