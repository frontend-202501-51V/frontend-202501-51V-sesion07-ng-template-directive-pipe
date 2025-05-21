import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-examples',
  template: `
    <h2>*ngIf</h2>
    <button (click)="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} sección
    </button>
    <div *ngIf="mostrar">
      <p>¡Esta sección se muestra u oculta con *ngIf!</p>
    </div>

    <h2>*ngFor</h2>
    <ul>
      <li *ngFor="let fruta of frutas; let i = index">
        {{ i + 1 }}. {{ fruta }}
      </li>
    </ul>

    <h2>*ngSwitch</h2>
    <select [(ngModel)]="color">
      <option value="rojo">Rojo</option>
      <option value="azul">Azul</option>
      <option value="verde">Verde</option>
    </select>
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'rojo'">El color es rojo</p>
      <p *ngSwitchCase="'azul'">El color es azul</p>
      <p *ngSwitchCase="'verde'">El color es verde</p>
      <p *ngSwitchDefault>Selecciona un color</p>
    </div>
  `
})
export class StructuralExamplesComponent {
  mostrar = true;
  frutas = ['Manzana', 'Banana', 'Naranja'];
  color = '';
}
