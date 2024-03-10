import { Component } from '@angular/core';
import { Usuario, UsuarioImpl } from '../../model/Usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  dni: string = '';

  agregarUsuario() {
    const user: UsuarioImpl = new UsuarioImpl(
      this.nombre,
      this.apellido,
      parseInt(this.telefono),
      this.dni
    );

    console.log(user.toString());

      this.nombre = ""
      this.apellido= ""
      this.telefono= 
      this.dni= ""
    

  }
}
