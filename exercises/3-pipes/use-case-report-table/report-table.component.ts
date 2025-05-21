import { Component } from '@angular/core';

interface Report {
  date: string;
  user: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-report-table',
  template: `
    <!-- Implementa aquí la tabla de reportes.
         Usa pipes integrados y personalizados para mostrar fecha, monto y estado.
         Agrega filtros y transformación visual usando pipes.
    -->
  `
})
export class ReportTableComponent {
  reports: Report[] = [
    // Ejemplo de datos
    // { date: '2024-06-01', user: 'Ana', amount: 1200, status: 'aprobado' }
  ];
  filterStatus = '';
}
