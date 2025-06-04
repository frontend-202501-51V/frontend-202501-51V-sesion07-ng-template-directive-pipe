import { Component } from '@angular/core';

@Component({
  selector: 'app-templates-examples',
  template: `
    <h2>Fundamentos de Templates en Angular</h2>

    <!-- 1. ¿Qué es un template en Angular? -->
    <h3>1. ¿Qué es un template?</h3>
    <p>
      Un <strong>template</strong> es la parte HTML de un componente Angular.<br>
      Define la estructura, el contenido y la presentación de la vista, conectándose con la lógica del componente.
    </p>

    <!-- 2. Interpolación -->
    <h3>2. Interpolación ({{'{{ ... }}'}})</h3>
    <p>
      Permite mostrar valores de variables o expresiones simples del componente directamente en la vista.
    </p>
    <p>Hola, {{ nombre }}!</p>

    <!-- 3. Expresiones en el template -->
    <h3>3. Expresiones en el template</h3>
    <p>
      Puedes usar operaciones matemáticas y lógicas dentro de la interpolación.
    </p>
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <p>¿Activo? {{ activo ? 'Sí' : 'No' }}</p>

    <!-- 4. Property Binding -->
    <h3>4. Property Binding</h3>
    <p>
      Asigna valores del componente a propiedades del DOM, útil para atributos dinámicos.
    </p>
    <img [src]="imagenUrl" alt="Foto de perfil" width="100">

    <!-- 5. Event Binding -->
    <h3>5. Event Binding</h3>
    <p>
      Ejecuta métodos del componente en respuesta a eventos del DOM.
    </p>
    <button (click)="saludar()">Saludar</button>

    <!-- 6. Two-way Binding -->
    <h3>6. Two-way Binding</h3>
    <p>
      Sincroniza el valor entre el input y la variable del componente.
    </p>
    <input [(ngModel)]="nombre" name="nombre" placeholder="Tu nombre">
    <p>Hola, {{ nombre }}</p>

    <!-- 7. *ngIf con else y ng-template -->
    <h3>7. *ngIf con else y ng-template</h3>
    <p>
      Muestra u oculta un elemento según una condición booleana, con opción de contenido alternativo.
    </p>
    <button (click)="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} mensaje
    </button>
    <p *ngIf="mostrar; else oculto">¡Este mensaje es visible!</p>
    <ng-template #oculto>
      <p>El mensaje está oculto.</p>
    </ng-template>

    <!-- 8. *ngFor con objetos y mensaje para lista vacía -->
    <h3>8. *ngFor</h3>
    <p>
      Repite un elemento para cada ítem de una colección. Puede mostrar el índice y trabajar con objetos.
    </p>
    <div *ngIf="usuarios.length; else sinUsuarios">
      <ul>
        <li *ngFor="let usuario of usuarios; let i = index">
          {{ i + 1 }}. {{ usuario.nombre }} ({{ usuario.rol }})
        </li>
      </ul>
    </div>
    <ng-template #sinUsuarios>
      <p>No hay usuarios registrados.</p>
    </ng-template>

    <!-- 9. Pipes -->
    <h3>9. Pipes</h3>
    <p>
      Transforman la presentación de los datos en el template (date, currency, uppercase, slice, etc).
    </p>
    <p>Fecha: {{ fecha | date:'shortDate' }}</p>
    <p>Precio: {{ precio | currency:'USD' }}</p>
    <p>Nombre: {{ nombre | uppercase }}</p>
    <p>Abreviado: {{ nombre | uppercase | slice:0:3 }}</p>

    <!-- Buenas prácticas -->
    <hr>
    <h4>Buenas prácticas:</h4>
    <ul>
      <li>Mantén los templates simples y legibles.</li>
      <li>No pongas lógica compleja en el template.</li>
      <li>Usa <code>ng-template</code> para contenido alternativo o reutilizable.</li>
      <li>Usa <code>trackBy</code> en <code>*ngFor</code> para listas grandes.</li>
      <li>No mezcles demasiados conceptos en una sola línea.</li>
    </ul>
  `
})
export class TemplatesExamplesComponent {
  nombre = 'Angular';
  activo = true;
  mostrar = true;
  imagenUrl = 'https://placekitten.com/120/120';
  usuarios = [
    { nombre: 'Ana', rol: 'Admin' },
    { nombre: 'Luis', rol: 'User' }
  ];
  fecha = new Date();
  precio = 1234.56;

  saludar() {
    alert('¡Hola!');
  }
}
