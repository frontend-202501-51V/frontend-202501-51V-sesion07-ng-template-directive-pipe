import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes-examples',
  template: `
    <h2>Pipes Personalizados</h2>
    <div class="mb-3">
      <input [(ngModel)]="texto" class="form-control" placeholder="Escribe un texto" />
    </div>
    <ngb-alert type="info" [dismissible]="false">
      Capitalize: {{ texto | capitalize }}
    </ngb-alert>
    <ngb-alert type="warning" [dismissible]="false">
      Reverse: {{ texto | reverse }}
    </ngb-alert>
    <ngb-alert type="success" [dismissible]="false">
      Capitalize + Reverse: {{ texto | capitalize | reverse }}
    </ngb-alert>
  `
})
export class CustomPipesExamplesComponent {
  texto = 'angular pipes';
}
