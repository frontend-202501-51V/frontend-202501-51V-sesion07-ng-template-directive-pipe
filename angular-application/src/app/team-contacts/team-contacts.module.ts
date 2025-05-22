import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamContactsRoutingModule } from './team-contacts-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { TeamContactsComponent } from './team-contacts.component';
import { RoleFilterPipe } from './role-pipe';


@NgModule({
  declarations: [RoleFilterPipe, TeamContactsComponent],
  imports: [
    CommonModule,NgbModule,FormsModule,
    TeamContactsRoutingModule
  ]
})
export class TeamContactsModule { }
