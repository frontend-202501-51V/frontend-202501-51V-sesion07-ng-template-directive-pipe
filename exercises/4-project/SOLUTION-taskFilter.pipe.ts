import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: any[], filter: 'all' | 'completed' | 'pending'): any[] {
    if (!tasks) return [];
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    if (filter === 'pending') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  }
}
