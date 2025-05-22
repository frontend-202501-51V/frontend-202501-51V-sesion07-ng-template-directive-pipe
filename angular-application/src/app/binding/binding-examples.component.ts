import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  template: `
  <!-- bindeo de propiedades -->
    <h2>Property Binding</h2>
    <!-- imagen -->
    <!-- src -> source (origen) -->
     <!-- ancho de 120 -->
      <!-- clase llamada mb-3 margin-bottom-3 -> margenes inferiores  -->
    <img [src]="imageUrl" alt="Imagen dinámica" width="120" class="mb-3">

    <h2>Event Binding</h2>
    <button class="btn btn-success mb-2" (click)="incrementar()" ngbTooltip="Haz clic para incrementar el contador">
      Incrementar
    </button>
    <ngb-alert type="info" [dismissible]="false" class="mb-3">
      <!-- cada vez que hago click en el boton incrementar el valor se incrementara en 1 -->
      Valor: {{ contador }}
    </ngb-alert>

    <h2>Two-way Binding</h2>
    <div class="input-group mb-3">
      <span class="input-group-text">Nombre</span>
      <!-- cada de entrada de texto -->
       <!-- cuando actualice este input se actualizara el atributo nombre -->
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
    // cada vez que se llama se incrementa en 1
    this.contador++;
  }
}
