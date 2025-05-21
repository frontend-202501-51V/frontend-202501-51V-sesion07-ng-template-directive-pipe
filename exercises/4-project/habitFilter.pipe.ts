import { Pipe, PipeTransform } from '@angular/core';
import { Habit } from './habit-list.component';

@Pipe({ name: 'habitFilter' })
export class HabitFilterPipe implements PipeTransform {
  transform(habits: Habit[], status: string, category: string): Habit[] {
    // TODO: Filtra los hábitos por estado y categoría
    return habits;
  }
}
