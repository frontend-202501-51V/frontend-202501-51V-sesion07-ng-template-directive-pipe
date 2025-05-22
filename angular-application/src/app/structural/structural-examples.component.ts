import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-examples',
  template: `
    <!-- estructural condicional -->
    <h2>*ngIf</h2>
    <!-- el boton tiene una clase -->
    <!-- al hacer click se invierte el valor mostrar de true a false y viceversa -->
    <!-- ngbTooltip permite agregar un texto tipo tooltip -->
    <button class="btn btn-primary mb-2" (click)="mostrar = !mostrar" ngbTooltip="Mostrar/Ocultar sección">
      <!-- plantilla que vamos a mostrar -->
       <!-- evaluamos mostrar con un operador ternario -->

      <!-- operador ternario -->
      <!-- CONDICION ? SI_EX_VERDADERO : SI_ES_FALSO   -->
       <!-- ejm:    1 === 2   ?   console.log("es verdadero???")   :    console.log("es falso!!")         -->
      <!-- compatible con una expresion de condicional normal -->
      <!--   if (1 === 2 ) { console.log('verdadero');   } else {  console.log('falso');     }   -->

      {{ mostrar ? 'Ocultar' : 'Mostrar' }} sección
    </button>
    <ngb-alert *ngIf="mostrar" type="success" (close)="mostrar = false" [dismissible]="true">
      ¡Esta sección se muestra u oculta con *ngIf!
    </ngb-alert>

    <h2>*ngFor</h2>
    <ul class="list-group mb-3">
      <!-- usamos ngFor -->
       <!-- declaramos la variable: let fruta -->
        <!-- agregamos la referencia al arreglo -->
      <li *ngFor="let fruta of frutas; let i = index" class="list-group-item">
        {{ i + 1 }}. {{ fruta }}
      </li>
    </ul>

    <h2>*ngSwitch</h2>
    <div class="mb-2">
      <select class="form-select" [(ngModel)]="color" ngbTooltip="Selecciona un color">
        <option value="">Selecciona un color</option>
        <option value="rojo">Rojo</option>
        <option value="azul">Azul</option>
        <option value="verde">Verde</option>
      </select>
    </div>
    <div [ngSwitch]="color">
      <ngb-alert *ngSwitchCase="'rojo'" type="danger" [dismissible]="false">
        El color es rojo
      </ngb-alert>
      <ngb-alert *ngSwitchCase="'azul'" type="primary" [dismissible]="false">
        El color es azul
      </ngb-alert>
      <ngb-alert *ngSwitchCase="'verde'" type="success" [dismissible]="false">
        El color es verde
      </ngb-alert>
      <ngb-alert *ngSwitchDefault type="info" [dismissible]="false">
        Selecciona un color
      </ngb-alert>
    </div>
  `
})
export class StructuralExamplesComponent {
  // booleano, me indica si se va a mostrar u ocultar algo
  mostrar = true;
  // arreglo, contiene varios string que representan frutas
  frutas = ['Manzana', 'Banana', 'Naranja']; // 3 elementos
  color = ''; // string vacio para almacenar el color
}
