import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormularioAngular';
  
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



}
