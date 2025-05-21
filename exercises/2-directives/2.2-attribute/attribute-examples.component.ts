import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-examples',
  template: `
    <h2>[ngClass]</h2>
    <button class="btn btn-outline-primary mb-2" (click)="activo = !activo" ngbTooltip="Cambia el estado">
      Cambiar estado
    </button>
    <ngb-alert [ngClass]="{ 'activo': activo, 'inactivo': !activo }" [type]="activo ? 'success' : 'secondary'" [dismissible]="false" class="mb-3">
      Estado: {{ activo ? 'Activo' : 'Inactivo' }}
    </ngb-alert>

    <h2>[ngStyle]</h2>
    <div class="mb-2">
      <input type="range" min="10" max="40" [(ngModel)]="fontSize" class="form-range" ngbTooltip="Ajusta el tamaño de fuente">
    </div>
    <ngb-alert [ngStyle]="{ 'font-size.px': fontSize, 'color': color }" type="info" [dismissible]="false" class="mb-2">
      Texto con tamaño dinámico
    </ngb-alert>
    <button class="btn btn-outline-secondary" (click)="color = color === 'blue' ? 'red' : 'blue'" ngbTooltip="Cambia el color del texto">
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
