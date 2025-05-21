import { Component } from '@angular/core';

@Component({
  selector: 'app-template-examples',
  template: `
    <h2>Ejemplo de Interpolación</h2>
    <p>Hola, {{ nombre }}!</p>

    <h3>Expresión matemática</h3>
    <p>2 + 2 = {{ 2 + 2 }}</p>

    <h3>Directiva estructural *ngIf con ng-bootstrap</h3>
    <button
      type="button"
      class="btn btn-primary mb-2"
      (click)="mostrar = !mostrar"
      ngbTooltip="Haz clic para mostrar u ocultar el mensaje"
    >
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} mensaje
    </button>
    <ngb-alert *ngIf="mostrar" type="success" (close)="mostrar = false" [dismissible]=true>
      ¡Este mensaje se muestra u oculta con *ngIf y ng-bootstrap!
    </ngb-alert>
  `
})
export class TemplateExamplesComponent {
  nombre = 'Angular';
  mostrar = true;
}
