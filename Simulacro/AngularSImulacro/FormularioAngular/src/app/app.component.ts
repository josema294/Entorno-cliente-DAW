import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'FormularioAngular';
  
  nombre=""
  edad=""
  email=""
  sexo=""
  comentarios=""
  opcion=""
  arrayUsuarios: Usuario[] = [];

  constructor(){
    
  }


  agregarUsuario(nombreForm:string, edadForm:string, emailForm:string, sexoForm:string, comentariosForm:string, opcionForm:string){

    this.arrayUsuarios?.push(
      {

        nombre:nombreForm,
        edad:edadForm,
        email:emailForm,
        sexo:sexoForm,
        comentarios:comentariosForm,
        opcion: opcionForm,
    }
    )

     if (this.arrayUsuarios) {
      this.arrayUsuarios?.forEach(element => {
        console.log(element);
        
      });
     }
    

  }

  //MEtodo con binding de formsmodule
  agregarUsuarioModule() {
    const nuevoUsuario = {
      nombre: this.nombre,
      edad: this.edad,
      email: this.email,
      sexo: this.sexo,
      comentarios: this.comentarios,
      opcion: this.opcion
    };
    this.arrayUsuarios.push(nuevoUsuario);
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.nombre = '';
    this.edad = "";
    this.email = '';
    this.sexo = '';
    this.comentarios = '';
    this.opcion = '1';
  }


}