import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-examples',
  template: `
    <h2>*ngIf</h2>
    <button class="btn btn-primary mb-2" (click)="mostrar = !mostrar" ngbTooltip="Mostrar/Ocultar sección">
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} sección
    </button>
    <ngb-alert *ngIf="mostrar" type="success" (close)="mostrar = false" [dismissible]="true">
      ¡Esta sección se muestra u oculta con *ngIf!
    </ngb-alert>

    <h2>*ngFor</h2>
    <ul class="list-group mb-3">
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
  mostrar = true;
  frutas = ['Manzana', 'Banana', 'Naranja'];
  color = '';
}
