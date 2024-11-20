import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  objeto = {
    nombre: 'Celeste',
    edad: 32,
    ciudad: 'Rosario',
    profesion: 'Desarrollador'
  }

}
