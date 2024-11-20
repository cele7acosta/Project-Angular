import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [NgIf],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  mensaje1: string = 'Hola, este es el primer mensaje.';
  mensaje2: string = 'Este es el segundo mensaje.';
  mostrarMensaje2: boolean = false;
}
