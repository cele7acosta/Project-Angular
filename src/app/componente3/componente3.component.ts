import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
  arrayObjetos = [
    {id: 1, nombre: 'Juan', edad: 25},
    {id: 2, nombre: 'Marta', edad: 30},
    {id: 3, nombre: 'Carlos', edad: 35},
    {id: 4, nombre: 'Pedro', edad: 40},
  ]

}