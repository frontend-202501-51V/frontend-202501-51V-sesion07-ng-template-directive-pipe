import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {
  nombres = ['miguel', 'alfredo', 'carlos']

  tareas = [{
    nombre: 'estudiar angular',
    activo: true
  },
  {
    nombre: 'aprender a nadar',
    activo: false
  }]

  // objeto tiene 4 propiedades, guardados en el KEY
  datosDeOficina: any = {
    uso: 'privado',
    tipo: 'comercial',
    color: 'blanco',
    activo :true
  }

  objectKeys = Object.keys;

  // elemento
  items:any = [
    {
      nombre: 'a', activo: true
    },
    {
      nombre: 'b', activo: false
    },
  ]

  matriz = [
    [1,2],
    [3,4]
  ]
}
