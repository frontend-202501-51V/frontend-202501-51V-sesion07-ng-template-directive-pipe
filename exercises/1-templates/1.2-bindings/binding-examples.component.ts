import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  template: `
    <h2>Property Binding</h2>
    <img [src]="imageUrl" alt="Imagen dinámica" width="120" class="mb-3">

    <h2>Event Binding</h2>
    <button class="btn btn-success mb-2" (click)="incrementar()" ngbTooltip="Haz clic para incrementar el contador">
      Incrementar
    </button>
    <ngb-alert type="info" [dismissible]="false" class="mb-3">
      Valor: {{ contador }}
    </ngb-alert>

    <h2>Two-way Binding</h2>
    <div class="input-group mb-3">
      <span class="input-group-text">Nombre</span>
      <input [(ngModel)]="nombre" placeholder="Escribe tu nombre" class="form-control">
    </div>
    <ngb-alert *ngIf="nombre" type="success" [dismissible]="false" class="mb-3">
      Hola, {{ nombre }}!
    </ngb-alert>

    <h2>Expresiones</h2>
    <ngb-alert type="warning" [dismissible]="false">
      El doble de {{ contador }} es {{ contador * 2 }}
    </ngb-alert>
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
