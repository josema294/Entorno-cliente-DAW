const baraja = []
let jugador = ""
let palos = ['T', 'C', 'P', 'D']
const botonStart = document.getElementById('btnstart')
let barajada = [];
let marcadorBanca = document.getElementById("marcadorBanca")
let marcadorJugador = document.getElementById("marcadorJugador")
let bancaPuntuacion = 0
let jugadorPuntuacion = 0
const zonaBanca = document.getElementById("banca")
const zonajugador = document.getElementById("jugador")
const interfaz = document.getElementById("interfaz")
const botonera = document.getElementById("botonera")

botonStart.addEventListener("click", () => promptNombre())

function promptNombre() {

    //Libreria para hacer bonito el prompt
    Swal.fire({
        title: 'Ingrese su nombre',
        input: 'text',
        inputPlaceholder: 'Tu nombre aquí',
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        inputValidator: (value) => {
            // Validador para comprobar si el valor ingresado es válido.
            if (!value) {
                return '¡Escribe tu nombre para empezar a jugar!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('Nombre ingresado:', result.value);
            jugador = result.value
            starGame()

        }
    });

}
function starGame() {

    document.getElementById("nombrejugador").textContent = `Nombre del jugador: ${jugador}`
    creaBaraja()
    barajada = mezclarBaraja(baraja)

    //Desactivamos el boton de empezar a jugar mientras la partida este en juego.
    botonStart.remove()

    //La banca empieza a jugar
    while (bancaPuntuacion <= 17) {

        let carta = new Carta(barajada.pop())
        let imagen = document.createElement('img')
        imagen.src = carta.imgSource
        imagen.width = 150
        imagen.height = 300
        zonaBanca.appendChild(imagen)
        bancaPuntuacion += carta.value
        marcadorBanca.textContent = `  Banca puntos: ${bancaPuntuacion}`

        if (bancaPuntuacion > 21) {

            over21()
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
    botonera.appendChild(botonPedir)
    botonera.appendChild(botonPlantarse)


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

        over21()
    }
}

const endGame = document.createElement("div")
endGame.className = "letreros"

function over21() {


    const reset = document.createElement("button")
    reset.innerHTML = "resetea el jeugo"
    document.getElementById('interfaz').innerHTML = '';


    if (bancaPuntuacion > 21) {

        endGame.textContent = "La banca se ha pasado de 21, Has ganado"
        interfaz.appendChild(endGame);
        interfaz.appendChild(reset);
        reset.addEventListener("click", () => {
            location.reload()
        })

    }

    if (jugadorPuntuacion > 21) {

        endGame.textContent = "Te has pasado de 21, pierdes la ronda"
        endGame.className = "letreros"
        interfaz.appendChild(endGame);
        interfaz.appendChild(reset);
        reset.addEventListener("click", () => {
            location.reload()
        })

    }
}

function plantate() {


    const reset = document.createElement("button")
    reset.innerHTML = "resetea el jeugo"
    document.getElementById('interfaz').innerHTML = '';

    if (bancaPuntuacion > jugadorPuntuacion) {

        endGame.textContent = `La banca te ha superado con ${bancaPuntuacion} putos , has perdido`
        interfaz.appendChild(endGame);
        interfaz.appendChild(reset);
        reset.addEventListener("click", () => {
            location.reload()
        })

    }

    if (bancaPuntuacion < jugadorPuntuacion) {

        endGame.textContent = `con ${jugadorPuntuacion} superas a la banca. Ganas! `
        interfaz.appendChild(endGame);
        interfaz.appendChild(reset);
        reset.addEventListener("click", () => {
            location.reload()
        })

    }

    if (bancaPuntuacion == jugadorPuntuacion) {

        endGame.textContent = "Habeis empatado"
        interfaz.appendChild(endGame);
        interfaz.appendChild(reset);
        reset.addEventListener("click", () => {
            location.reload()
        })
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
