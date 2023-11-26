const baraja = []
let jugador = ""
let palos = ['T', 'C', 'P', 'D']
const boton = document.getElementById('btnstart')
let barajada = [];
let marcadorBanca = document.getElementById("marcadorBanca")
let marcadorJugador = document.getElementById("marcadorJugador")
let bancaPuntuacion = 0
let jugadorPuntuacion = 0
const zonaBanca = document.getElementById("banca")
const zonajugador = document.getElementById("jugador")
const interfaz = document.getElementById("interfaz")


boton.addEventListener("click", () => starGame())


function starGame() {

    jugador = prompt("Por favor, introduce tu nombre:")
    document.getElementById("nombrejugador").textContent = `Jugador: ${jugador}`
    creaBaraja()
    barajada = mezclarBaraja(baraja)

    //La banca empieza a jugar


    while (bancaPuntuacion <= 17) {

        let carta = new Carta(barajada.pop())
        let imagen = document.createElement('img')
        imagen.src = carta.imgSource
        imagen.width = 150
        imagen.height = 300
        zonaBanca.appendChild(imagen)
        bancaPuntuacion += carta.value
        marcadorBanca.textContent = `Banca puntos: ${bancaPuntuacion}`

        if (bancaPuntuacion > 21) {

            BancaPierde()

        }

    }


    //El jugador empieza

    const botonPedir = document.createElement('button');
    botonPedir.addEventListener("click", () => pideCarta())

    botonPedir.textContent = "Pedir carta"
    botonPedir.id = "botonPedir"
    const botonPlantarse = document.createElement('button');
    botonPlantarse.addEventListener("click", () => plantate())

    botonPlantarse.textContent = "Plantarse"
    botonPlantarse.id = "botonPlantarse"
    interfaz.appendChild(botonPedir)
    interfaz.appendChild(botonPlantarse)


}

function pideCarta() {

    let carta = new Carta(barajada.pop())
    let imagen = document.createElement('img')
    imagen.src = carta.imgSource
    imagen.width = 150
    imagen.height = 300
    zonajugador.appendChild(imagen)

    jugadorPuntuacion += carta.value
    marcadorJugador.textContent = `Tus puntos: ${jugadorPuntuacion}`


    if (jugadorPuntuacion > 21) {

        "has perdido, te has pasado de 21"

    }


}

function BancaPierde() {

    alert("La banca Ha perdido, ha excedido la puntuacion de 21")

}

function plantate() {

    if (bancaPuntuacion > jugadorPuntuacion) {

    }
    else if (bancaPuntuacion = jugadorPuntuacion) {

    }
    else {

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
