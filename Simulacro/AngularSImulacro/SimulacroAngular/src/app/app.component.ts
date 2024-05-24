import { Component, OnInit } from '@angular/core';
import { BookService } from './services/api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any = "";

  arrayLibros: string [] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getData().subscribe(data => {
      this.data = data;

      // console.log(data);

          // Verifica si data tiene una propiedad 'data' que es un array
          if (data && Array.isArray(data.data)) {
            this.arrayLibros = data.data.map((book: any) => book.Title);

            this.arrayLibros
            
          } else {
            console.error('La estructura de datos no es la esperada:', data);
          }
        }, error => {
          console.error('Error al obtener los datos de la API:', error);
        
      
    });



  }
}
