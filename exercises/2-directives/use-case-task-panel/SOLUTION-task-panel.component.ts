import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
  important: boolean;
}

@Component({
  selector: 'app-task-panel',
  template: `
    <div class="input-group mb-3">
      <input [(ngModel)]="newTask" class="form-control" placeholder="Nueva tarea" (keyup.enter)="addTask()" />
      <button class="btn btn-primary" (click)="addTask()" ngbTooltip="Agregar tarea">Agregar</button>
    </div>

    <ngb-alert *ngIf="tasks.length === 0" type="warning" [dismissible]="false">
      No hay tareas registradas.
    </ngb-alert>

    <ul class="list-group">
      <li *ngFor="let task of tasks"
          [ngClass]="{
            'list-group-item-success': task.completed,
            'list-group-item-warning': task.important && !task.completed
          }"
          class="list-group-item d-flex align-items-center">
        <span (click)="toggleCompleted(task)"
              [style.cursor]="'pointer'"
              [class.text-decoration-line-through]="task.completed"
              ngbTooltip="Haz clic para marcar como completada o pendiente">
          {{ task.title }}
        </span>
        <button class="btn btn-sm btn-outline-warning ms-auto me-2"
                (click)="toggleImportant(task)"
                [appImportant]="task.important"
                [disabled]="task.completed"
                ngbTooltip="Marcar como importante">
          <span *ngIf="task.important">★</span>
          <span *ngIf="!task.important">☆</span>
        </button>
        <span *ngIf="task.completed" class="badge bg-success">Completada</span>
        <span *ngIf="task.important && !task.completed" class="badge bg-warning text-dark ms-2">Importante</span>
      </li>
    </ul>

    <ngb-alert *ngIf="hasCompletedTasks()" type="success" [dismissible]="false" class="mt-3">
      ¡Tienes {{ completedTasksCount() }} tarea(s) completada(s)!
    </ngb-alert>
  `
})
export class TaskPanelComponent {
  tasks: Task[] = [];
  newTask = '';

  addTask() {
    const title = this.newTask.trim();
    if (title) {
      this.tasks.push({ title, completed: false, important: false });
      this.newTask = '';
    }
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }

  toggleImportant(task: Task) {
    if (!task.completed) {
      task.important = !task.important;
    }
  }

  hasCompletedTasks(): boolean {
    return this.tasks.some(t => t.completed);
  }

  completedTasksCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }
}
