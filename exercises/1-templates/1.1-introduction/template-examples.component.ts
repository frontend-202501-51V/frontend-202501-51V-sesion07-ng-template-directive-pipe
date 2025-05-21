import { Component } from '@angular/core';

@Component({
  selector: 'app-template-examples',
  template: `
    <h2>Ejemplo de Interpolación</h2>
    <p>Hola, {{ nombre }}!</p>

    <h3>Expresión matemática</h3>
    <p>2 + 2 = {{ 2 + 2 }}</p>

    <h3>Directiva estructural *ngIf</h3>
    <button (click)="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} mensaje
    </button>
    <div *ngIf="mostrar">
      <p>¡Este mensaje se muestra u oculta con *ngIf!</p>
    </div>
  `
})
export class TemplateExamplesComponent {
  nombre = 'Angular';
  mostrar = true;
}
