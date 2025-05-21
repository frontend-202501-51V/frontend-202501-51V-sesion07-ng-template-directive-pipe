import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
  transform(reports: any[], status: string): any[] {
    // Implementa aquí la lógica para filtrar por estado
    return reports;
  }
}
