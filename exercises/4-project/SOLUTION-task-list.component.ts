import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  template: `
    <input [(ngModel)]="newTask" placeholder="Nueva tarea" (keyup.enter)="addTask()" />
    <button (click)="addTask()">Agregar</button>

    <div>
      <label>Filtrar:
        <select [(ngModel)]="filter">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </label>
    </div>

    <ul>
      <li *ngFor="let task of tasks | taskFilter:filter"
          [ngClass]="{ 'completed': task.completed }"
          (click)="toggleTask(task)">
        {{ task.title | capitalize }}
      </li>
    </ul>

    <p>Total: {{ tasks.length }} | Completadas: {{ tasks | taskFilter:'completed' | length }}</p>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
      color: gray;
    }
    ul {
      padding-left: 0;
      list-style: none;
    }
    li {
      cursor: pointer;
      padding: 4px 0;
    }
  `]
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask = '';
  filter: 'all' | 'completed' | 'pending' = 'all';

  addTask() {
    const title = this.newTask.trim();
    if (title) {
      this.tasks.push({ title, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
}
