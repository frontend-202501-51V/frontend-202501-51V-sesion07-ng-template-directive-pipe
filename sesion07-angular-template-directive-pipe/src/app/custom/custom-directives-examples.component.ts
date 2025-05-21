import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directives-examples',
  template: `
    <h2>Directiva appHighlight</h2>
    <p appHighlight>
      Pasa el mouse sobre este texto para resaltar el fondo.
    </p>

    <h2>Directiva appColorOnClick</h2>
    <p appColorOnClick>
      Haz clic en este texto para cambiar su color a rojo.
    </p>
  `
})
export class CustomDirectivesExamplesComponent {}
