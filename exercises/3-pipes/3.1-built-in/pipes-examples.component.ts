import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  template: `
    <h2>Pipes Integrados</h2>
    <ngb-alert type="info" [dismissible]="false">
      Fecha actual: {{ today | date:'fullDate' }}
    </ngb-alert>
    <ngb-alert type="success" [dismissible]="false">
      Nombre en mayúsculas: {{ name | uppercase }}
    </ngb-alert>
    <ngb-alert type="warning" [dismissible]="false">
      Precio: {{ price | currency:'USD' }}
    </ngb-alert>
    <ngb-alert type="secondary" [dismissible]="false">
      Objeto como JSON: {{ user | json }}
    </ngb-alert>

    <h3>Combinando pipes</h3>
    <ngb-alert type="primary" [dismissible]="false">
      {{ name | lowercase | titlecase }}
    </ngb-alert>
  `
})
export class PipesExamplesComponent {
  today = new Date();
  name = 'Angular Workshop';
  price = 1234.56;
  user = { nombre: 'Ana', edad: 28 };
}
