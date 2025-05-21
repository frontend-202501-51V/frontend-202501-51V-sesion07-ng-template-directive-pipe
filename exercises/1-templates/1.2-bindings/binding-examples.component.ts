import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  template: `
    <h2>Property Binding</h2>
    <img [src]="imageUrl" alt="Imagen dinámica" width="120">

    <h2>Event Binding</h2>
    <button (click)="incrementar()">Incrementar</button>
    <p>Valor: {{ contador }}</p>

    <h2>Two-way Binding</h2>
    <input [(ngModel)]="nombre" placeholder="Escribe tu nombre">
    <p>Hola, {{ nombre }}!</p>

    <h2>Expresiones</h2>
    <p>El doble de {{ contador }} es {{ contador * 2 }}</p>
  `
})
export class BindingExamplesComponent {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  contador = 0;
  nombre = '';

  incrementar() {
    this.contador++;
  }
}
