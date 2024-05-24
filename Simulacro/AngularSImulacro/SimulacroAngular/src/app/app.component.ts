import { Component, OnInit } from '@angular/core';
import { BookService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  apiInfo: any = '';
  arrayLibros: string[] = [];
  usable: any[] = [];
  libro: any = '';
  jsonInfo?: JSON;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getData().subscribe((data) => {
      this.apiInfo = data;

      this.arrayLibros = this.apiInfo.data;

      this.usable = this.arrayLibros;
    });
  }
}
