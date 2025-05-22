import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-team-contacts',
  template: `
    <h2>Miembros del Equipo de Proyecto</h2>
    <ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = ''" class="mb-3">
      {{ successMessage }}
    </ngb-alert>
    <div class="mb-3">
      <input [(ngModel)]="newName" placeholder="Nombre" class="form-control mb-1" />
      <input [(ngModel)]="newEmail" placeholder="Correo" class="form-control mb-1" />
      <select [(ngModel)]="newRole" class="form-select mb-1">
        <option value="" disabled selected>Rol</option>
        <option *ngFor="let r of roles" [value]="r">{{ r }}</option>
      </select>
      <button class="btn btn-primary" (click)="addMember()" ngbTooltip="Agrega un nuevo miembro al equipo">Agregar miembro</button>
    </div>

    <div class="mb-3">
      <label>Filtrar por rol:</label>
      <select [(ngModel)]="filterRole" class="form-select w-auto d-inline-block ms-2" ngbTooltip="Filtra los miembros por rol">
        <option value="">Todos</option>
        <option *ngFor="let r of roles" [value]="r">{{ r }}</option>
      </select>
    </div>

    <ul class="list-group">
      <li *ngFor="let member of team | roleFilter:filterRole"
          [ngClass]="{'list-group-item-success': member.role === 'Líder de Proyecto'}"
          class="list-group-item d-flex align-items-center"
          ngbTooltip="Miembro: {{ member.name }}">
        <strong>{{ member.name | uppercase }}</strong> - {{ member.email }}
        <span class="badge bg-info ms-2">{{ member.role }}</span>
      </li>
    </ul>
    <ngb-alert *ngIf="team.length === 0" type="warning" [dismissible]="false" class="mt-3">
      No hay miembros en el equipo.
    </ngb-alert>
  `
})
export class TeamContactsComponent {
  team: TeamMember[] = [
    { name: 'Ana Torres', email: 'ana@empresa.com', role: 'Líder de Proyecto' },
    { name: 'Luis Pérez', email: 'luis@empresa.com', role: 'Desarrollador' },
    { name: 'Carla Gómez', email: 'carla@empresa.com', role: 'Tester' }
  ];
  roles = ['Líder de Proyecto', 'Desarrollador', 'Tester'];
  newName = '';
  newEmail = '';
  newRole = '';
  filterRole = '';
  successMessage = '';

  addMember() {
    if (this.newName && this.newEmail && this.newRole) {
      this.team.push({
        name: this.newName,
        email: this.newEmail,
        role: this.newRole
      });
      this.successMessage = 'Miembro agregado correctamente';
      this.newName = '';
      this.newEmail = '';
      this.newRole = '';
    }
  }
}
