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
    <div class="mb-3">
      <label class="form-label">Filtrar por estado:</label>
      <select [(ngModel)]="filterStatus" class="form-select w-auto d-inline-block ms-2" ngbTooltip="Filtra los reportes por estado">
        <option value="">Todos</option>
        <option value="aprobado">Aprobado</option>
        <option value="pendiente">Pendiente</option>
        <option value="rechazado">Rechazado</option>
      </select>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle">
        <thead class="table-light">
          <tr>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Monto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let report of reports | statusFilter:filterStatus">
            <td>
              <span ngbTooltip="Fecha del reporte">{{ report.date | date:'longDate' }}</span>
            </td>
            <td>
              <span class="text-primary" ngbTooltip="Usuario que generó el reporte">{{ report.user | uppercase }}</span>
            </td>
            <td>
              <span class="fw-bold" ngbTooltip="Monto del reporte">{{ report.amount | currencyFormat:'USD':'symbol':'1.2-2' }}</span>
            </td>
            <td>
              <span [ngClass]="{
                'badge bg-success': report.status === 'aprobado',
                'badge bg-warning text-dark': report.status === 'pendiente',
                'badge bg-danger': report.status === 'rechazado'
              }" ngbTooltip="Estado del reporte">
                {{ report.status | capitalize }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ngb-alert *ngIf="(reports | statusFilter:filterStatus).length === 0" type="warning" [dismissible]="false">
      No hay reportes para el filtro seleccionado.
    </ngb-alert>
    <ngb-alert *ngIf="(reports | statusFilter:filterStatus).length > 0" type="info" [dismissible]="false" class="mt-2">
      Mostrando {{ (reports | statusFilter:filterStatus).length }} reporte(s).
    </ngb-alert>
  `
})
export class ReportTableComponent {
  reports: Report[] = [
    { date: '2024-06-01', user: 'Ana', amount: 1200, status: 'aprobado' },
    { date: '2024-06-02', user: 'Luis', amount: 800, status: 'pendiente' },
    { date: '2024-06-03', user: 'Carla', amount: 950, status: 'rechazado' },
    { date: '2024-06-04', user: 'Pedro', amount: 1500, status: 'aprobado' }
  ];
  filterStatus = '';
}
