class Carta {

    constructor(infoCarta) {

        this.infoCarta = infoCarta
        this.determinaPalo(infoCarta)
        this.palo
        this.paloExtendido

        this.numero(infoCarta)
        this.value
        this.carta
        this.setImg()
        this.imgSource

    }


    determinaPalo(value) {

        if (value.includes('T')) {
            this.palo = "T"
            this.paloExtendido = "Treboles"
        }
        else if (value.includes('C')) {
            this.palo = "C"
            this.paloExtendido = "Corazones"
        }
        else if (value.includes('P')) {
            this.palo = "P"
            this.paloExtendido = "Picas"
        }
        else {
            this.palo = "D"
            this.paloExtendido = "Diamantes"
        }


    }

    numero(infoCarta) {
        let valorNumerico = parseInt(infoCarta);

        switch (valorNumerico) {
            case valorNumerico = 1:
                this.value = 1
                this.carta = 1
                break;
            case valorNumerico = 2:
                this.value = 2
                this.carta = 2
                break;
            case valorNumerico = 3:
                this.value = 3
                this.carta = 3
                break;
            case valorNumerico = 4:
                this.value = 4
                this.carta = 4
                break;
            case valorNumerico = 5:
                this.value = 5
                this.carta = 5
                break;
            case valorNumerico = 6:
                this.value = 6
                this.carta = 6
                break;
            case valorNumerico = 7:
                this.value = 7
                this.carta = 7
                break;
            case valorNumerico = 8:
                this.value = 8
                this.carta = 8
                break;
            case valorNumerico = 9:
                this.value = 9
                this.carta = 9
                break;
            case valorNumerico = 10:
                this.value = 10
                this.carta = 10
                break;
            case valorNumerico = 11:
                this.value = 11
                this.carta = 'J'
                break;
            case valorNumerico = 12:
                this.value = 11
                this.carta = 'Q'
                break;
            case valorNumerico = 13:
                this.value = 11
                this.carta = 'K'
                break;
            default:
                break;
        }


    }

    setImg() {
        this.imgSource = `./utils/images/${this.carta}${this.palo}.png`

    }

}

