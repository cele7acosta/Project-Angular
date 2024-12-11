import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { array } from '../models/array';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component implements OnInit{
  /* arrayObjetos = [
    {id: 1, nombre: 'Juan', edad: 25},
    {id: 2, nombre: 'Marta', edad: 30},
    {id: 3, nombre: 'Carlos', edad: 35},
    {id: 4, nombre: 'Pedro', edad: 40},
  ] */

    arrayObjetos: array[] = [];

    constructor(private dataService: DataService){}

    ngOnInit(): void {
      this.arrayObjetos = this.dataService.getData();
    }

}
