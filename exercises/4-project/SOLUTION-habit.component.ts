import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from './habit-list.component';

@Component({
  selector: 'habit',
  template: `
    <span>{{ habit.name | capitalize }} ({{ habit.category | capitalize }})</span>
    <button (click)="toggle.emit()">
      {{ habit.completed ? 'Desmarcar' : 'Marcar como cumplido' }}
    </button>
  `
})
export class HabitComponent {
  @Input() habit!: Habit;
  @Output() toggle = new EventEmitter<void>();
}
