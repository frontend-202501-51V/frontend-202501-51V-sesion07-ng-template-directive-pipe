import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
  transform(reports: any[], status: string): any[] {
    if (!status) return reports;
    return reports.filter(r => r.status === status);
  }
}
