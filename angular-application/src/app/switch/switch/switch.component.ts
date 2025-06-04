import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  // manejamos traducciones
  idioma = 'en'

  evento = {tipo: 'partido de futbol'}
}
