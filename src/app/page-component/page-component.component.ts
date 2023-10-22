import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.css']
})
export class PageComponentComponent implements OnInit{

  duracion: any;
  peliculas: any;
  ngOnInit(): void {
    console.log(this.duracion)
    this.duracion = 1;
    this.peliculas = [
      'Combo dinosaurios',
      'Combo Anabelle',
      'Combo tercero',
      'Combo cuatro'
    ]
  }

  constructor(){
  }
}
