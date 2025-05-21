import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  template: `
    <h2>Pipes Integrados</h2>
    <p>Fecha actual: {{ today | date:'fullDate' }}</p>
    <p>Nombre en mayúsculas: {{ name | uppercase }}</p>
    <p>Precio: {{ price | currency:'USD' }}</p>
    <p>Objeto como JSON: {{ user | json }}</p>

    <h3>Combinando pipes</h3>
    <p>{{ name | lowercase | titlecase }}</p>
  `
})
export class PipesExamplesComponent {
  today = new Date();
  name = 'Angular Workshop';
  price = 1234.56;
  user = { nombre: 'Ana', edad: 28 };
}
