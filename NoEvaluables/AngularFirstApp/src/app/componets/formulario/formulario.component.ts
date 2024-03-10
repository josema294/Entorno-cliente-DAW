import { Component } from '@angular/core';
import { Usuario, UsuarioImpl } from '../../model/Usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  listaUsuarios: UsuarioImpl[] = [];

  
  agregarUsuario(nombre:string, apellido:string , telefono: string, dni:string ){
    const nuevoUsuario = new UsuarioImpl(nombre, apellido, parseInt(telefono), dni);
    this.listaUsuarios.push(nuevoUsuario);
  
  
    this.listaUsuarios.forEach((usuario) => {
      console.log(usuario.toString());
      
      
    })
  ;
  
  }


  
}
