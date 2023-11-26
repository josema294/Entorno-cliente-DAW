 class Carta {

    constructor(value){

        this.value = value
        this.palo = this.palo(value)
        this.numero = this.numero(value)
        this.img = this.setImg()
        
    }

    valor(){
        return this.value
    }

  palo(value){
    
    if(value.includes('T')){
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
    else {this.palo = "D"
    this.paloExtendido = "Diamantes"}

    
  }

  numero (value) {

    switch (value) {
        case value.includes('1'):
            this.value = 1
            this.carta=1
            break;
        case value.includes('2'):
            this.value = 2
            this.carta=2
            break;
        case value.includes('3'):
            this.value = 3
            this.carta=3
            break;
        case value.includes('4'):
            this.value = 4
            this.carta=4
            break;
        case value.includes('5'):
            this.value = 5
            this.carta=5
            break;
        case value.includes('6'):
            this.value = 6
            this.carta=6
            break;
        case value.includes('7'):
            this.value = 7
            this.carta=7
            break;
        case value.includes('8'):
            this.value = 8
            this.carta=8
            break;
        case value.includes('9'):
            this.value = 9
            this.carta=9
            break;
        case value.includes('10'):
            this.value = 10
            this.carta=10
            break;
        case value.includes('11'):
            this.value = 11
            this.carta='J'
            break;
        case value.includes('12'):
            this.value = 11
            this.carta='Q'
            break;
        case value.includes('13'):
            this.value = 11
            this.carta='K'
            break;
        default:
            break;
    }


  }

  setImg() {

    `../Actividad1_BlackJack/utils/images/${this.carta}${this.palo}`
  }

}

