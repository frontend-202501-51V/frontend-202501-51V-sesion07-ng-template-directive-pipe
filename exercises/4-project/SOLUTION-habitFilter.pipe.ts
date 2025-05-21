import { Pipe, PipeTransform } from '@angular/core';
import { Habit } from './habit-list.component';

@Pipe({ name: 'habitFilter' })
export class HabitFilterPipe implements PipeTransform {
  transform(habits: Habit[], status: string, category: string): Habit[] {
    let filtered = habits;
    if (status === 'completed') {
      filtered = filtered.filter(h => h.completed);
    } else if (status === 'pending') {
      filtered = filtered.filter(h => !h.completed);
    }
    if (category !== 'all') {
      filtered = filtered.filter(h => h.category === category);
    }
    return filtered;
  }
}
