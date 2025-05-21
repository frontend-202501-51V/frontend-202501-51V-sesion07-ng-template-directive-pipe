import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
  important: boolean;
}

@Component({
  selector: 'app-task-panel',
  template: `
    <!-- Implementa aquí la UI para agregar, listar y gestionar tareas.
         Usa directivas estructurales, de atributo y la directiva personalizada appImportant.
         Muestra el título, estado y si es importante. -->
  `
})
export class TaskPanelComponent {
  tasks: Task[] = [];
  newTask = '';

  addTask() {
    // Implementa la lógica para agregar una tarea
  }

  toggleCompleted(task: Task) {
    // Implementa la lógica para marcar como completada/pendiente
  }

  toggleImportant(task: Task) {
    // Implementa la lógica para marcar como importante/no importante
  }
}
