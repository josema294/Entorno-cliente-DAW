export interface Usuario {

    nombre: string
    apellido: string
    telefono: number
    dni: string

    

}

export class UsuarioImpl implements Usuario {
    nombre: string;
    apellido: string;
    telefono: number;
    dni: string;

    constructor(nombre: string, apellido: string, telefono: number, dni: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.dni = dni;
    }

    toString(): string {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Teléfono: ${this.telefono}, DNI: ${this.dni}`;
    }
}