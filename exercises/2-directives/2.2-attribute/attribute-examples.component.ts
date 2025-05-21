import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-examples',
  template: `
    <h2>[ngClass]</h2>
    <button (click)="activo = !activo">
      Cambiar estado
    </button>
    <p [ngClass]="{ 'activo': activo, 'inactivo': !activo }">
      Estado: {{ activo ? 'Activo' : 'Inactivo' }}
    </p>

    <h2>[ngStyle]</h2>
    <input type="range" min="10" max="40" [(ngModel)]="fontSize">
    <p [ngStyle]="{ 'font-size.px': fontSize, 'color': color }">
      Texto con tamaño dinámico
    </p>
    <button (click)="color = color === 'blue' ? 'red' : 'blue'">
      Cambiar color
    </button>
  `,
  styles: [`
    .activo { font-weight: bold; color: green; }
    .inactivo { color: gray; }
  `]
})
export class AttributeExamplesComponent {
  activo = false;
  fontSize = 16;
  color = 'blue';
}
