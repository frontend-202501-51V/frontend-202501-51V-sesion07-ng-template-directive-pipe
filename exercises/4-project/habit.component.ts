import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from './habit-list.component';

@Component({
  selector: 'habit',
  template: `
    <!-- TODO: Muestra el nombre y categoría del hábito y un botón para marcar/desmarcar -->
  `
})
export class HabitComponent {
  @Input() habit!: Habit;
  @Output() toggle = new EventEmitter<void>();
}
