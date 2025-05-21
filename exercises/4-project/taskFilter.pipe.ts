import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: any[], filter: 'all' | 'completed' | 'pending'): any[] {
    // your code goes here
   return []
  }
}
