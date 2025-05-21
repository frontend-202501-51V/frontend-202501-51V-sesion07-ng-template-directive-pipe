import { Component } from '@angular/core';

export interface Habit {
  name: string;
  category: string;
  completed: boolean;
}

@Component({
  selector: 'habit-list',
  template: `
    <div class="filters">
      <label>
        Estado:
        <select [(ngModel)]="filterStatus">
          <option value="all">Todos</option>
          <option value="completed">Cumplidos</option>
          <option value="pending">Pendientes</option>
        </select>
      </label>
      <label>
        Categoría:
        <select [(ngModel)]="filterCategory">
          <option value="all">Todas</option>
          <option *ngFor="let cat of categories" [value]="cat">{{ cat | capitalize }}</option>
        </select>
      </label>
    </div>

    <div>
      <input [(ngModel)]="newHabit" placeholder="Nuevo hábito" />
      <select [(ngModel)]="newCategory">
        <option *ngFor="let cat of categories" [value]="cat">{{ cat | capitalize }}</option>
      </select>
      <button (click)="addHabit()">Agregar</button>
    </div>

    <h3>
      Total: {{ habits | habitFilter:filterStatus:filterCategory | length }} /
      {{ habits.length }} hábitos
    </h3>
    <h4>
      Progreso: {{ (habits | habitFilter:'completed':'all' | length) / habits.length * 100 | number:'1.0-0' }}%
    </h4>

    <ul>
      <li *ngFor="let habit of habits | habitFilter:filterStatus:filterCategory"
          [ngClass]="{'completed': habit.completed}"
          appHighlight="{{ habit.completed ? 'lightgreen' : '' }}">
        <habit [habit]="habit" (toggle)="toggleHabit(habit)"></habit>
      </li>
    </ul>
  `,
  styles: [`
    .completed { text-decoration: line-through; color: gray; }
    .filters { margin-bottom: 1em; }
    ul { list-style: none; padding: 0; }
    li { margin-bottom: 0.5em; }
  `]
})
export class HabitListComponent {
  habits: Habit[] = [
    { name: 'Beber agua', category: 'salud', completed: false },
    { name: 'Leer 20 minutos', category: 'personal', completed: true },
    { name: 'Ejercicio', category: 'salud', completed: false },
    { name: 'Meditar', category: 'personal', completed: false },
    { name: 'Planificar el día', category: 'productividad', completed: true }
  ];

  categories = ['salud', 'personal', 'productividad'];
  filterStatus = 'all';
  filterCategory = 'all';

  newHabit = '';
  newCategory = this.categories[0];

  addHabit() {
    if (this.newHabit.trim()) {
      this.habits.push({
        name: this.newHabit,
        category: this.newCategory,
        completed: false
      });
      this.newHabit = '';
    }
  }

  toggleHabit(habit: Habit) {
    habit.completed = !habit.completed;
  }
}
