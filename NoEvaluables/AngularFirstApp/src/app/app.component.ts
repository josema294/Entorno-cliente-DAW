import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: String = "Jose";
  edad: number = 34
  aprendiendo: string = "Angular"
  logo: string = "https://blog.ninja-squad.com/assets/images/angular_gradient.png"
  contador: number  = 0 
  


  contadorsuma(){

    this.contador ++
  
  }
  

}

