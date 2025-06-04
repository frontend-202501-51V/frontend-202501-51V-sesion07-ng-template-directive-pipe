import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-examples',
  template: `
    <h2>Fundamentos de Directivas en Angular</h2>

    <!-- 1. Directiva estructural *ngIf -->
    <h3>1. *ngIf</h3>
    <p>
      <strong>*ngIf</strong> muestra u oculta un elemento según una condición booleana.
    </p>
    <button (click)="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar saludo' : 'Mostrar saludo' }}
    </button>
    <p *ngIf="mostrar; else oculto">¡Hola, Angular Directivas!</p>
    <ng-template #oculto>
      <p>El saludo está oculto.</p>
    </ng-template>

    <!-- 2. Directiva estructural *ngFor -->
    <h3>2. *ngFor</h3>
    <p>
      <strong>*ngFor</strong> repite un elemento para cada ítem de una colección.
    </p>
    <ul>
      <li *ngFor="let fruta of frutas; let i = index">
        {{ i + 1 }}. {{ fruta }}
      </li>
    </ul>
    <div *ngIf="!frutas.length">No hay frutas en la lista.</div>

    <!-- 3. Directiva estructural *ngSwitch -->
    <h3>3. *ngSwitch</h3>
    <p>
      <strong>*ngSwitch</strong> muestra un bloque según el valor de una variable.
    </p>
    <select [(ngModel)]="color">
      <option value="rojo">Rojo</option>
      <option value="azul">Azul</option>
      <option value="verde">Verde</option>
      <option value="otro">Otro</option>
    </select>
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'rojo'">Color seleccionado: Rojo</p>
      <p *ngSwitchCase="'azul'">Color seleccionado: Azul</p>
      <p *ngSwitchCase="'verde'">Color seleccionado: Verde</p>
      <p *ngSwitchDefault>Color seleccionado: Otro</p>
    </div>

    <!-- 4. Directiva de atributo [ngClass] -->
    <h3>4. [ngClass]</h3>
    <p>
      <strong>[ngClass]</strong> aplica clases CSS dinámicamente.
    </p>
    <p [ngClass]="{ destacado: esDestacado }" (click)="esDestacado = !esDestacado">
      Haz clic para alternar clase <code>destacado</code>
    </p>

    <!-- 5. Directiva de atributo [ngStyle] -->
    <h3>5. [ngStyle]</h3>
    <p>
      <strong>[ngStyle]</strong> aplica estilos CSS en línea de forma dinámica.
    </p>
    <p [ngStyle]="{ color: colorTexto, fontWeight: 'bold' }">
      Texto con color dinámico ({{ colorTexto }})
    </p>
    <button (click)="alternarColor()">Cambiar color de texto</button>

    <!-- 6. Directiva personalizada -->
    <h3>6. Directiva personalizada</h3>
    <p>
      Puedes crear tus propias directivas para reutilizar lógica de presentación.
    </p>
    <p appResaltar>Texto resaltado con directiva personalizada <code>appResaltar</code></p>

    <!-- Buenas prácticas -->
    <hr>
    <h4>Buenas prácticas:</h4>
    <ul>
      <li>Usa directivas estructurales para controlar el DOM.</li>
      <li>Evita lógica compleja en el template.</li>
      <li>Combina directivas de atributo para estilos y clases dinámicas.</li>
      <li>Crea directivas personalizadas para reutilizar comportamientos.</li>
    </ul>
  `,
  styles: [`
    .destacado { background: #ffe082; }
    h3 { margin-top: 1.5em; }
    ul { margin-bottom: 1em; }
    p[appResaltar] { padding: 0.5em; }
  `]
})
export class DirectivesExamplesComponent {
  mostrar = true;
  frutas = ['Manzana', 'Banana', 'Naranja'];
  color = 'rojo';
  esDestacado = false;
  colorTexto = 'green';

  alternarColor() {
    this.colorTexto = this.colorTexto === 'green' ? 'blue' : 'green';
  }
}
