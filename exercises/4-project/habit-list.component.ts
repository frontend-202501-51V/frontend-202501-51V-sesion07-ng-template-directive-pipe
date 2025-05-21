import { Component } from '@angular/core';

export interface Habit {
  name: string;
  category: string;
  completed: boolean;
}

@Component({
  selector: 'habit-list',
  template: `
    <!-- TODO: Implementa el template usando directivas estructurales, de atributo, pipes y componentes -->
  `
})
export class HabitListComponent {
  habits: Habit[] = [
    // Ejemplo de datos iniciales
    { name: 'Beber agua', category: 'salud', completed: false },
    { name: 'Leer 20 minutos', category: 'personal', completed: true }
  ];

  // TODO: Agrega propiedades y métodos para filtros, agregar hábitos y marcar como cumplidos
}
