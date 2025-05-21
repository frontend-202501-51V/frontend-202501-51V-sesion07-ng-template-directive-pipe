import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamContactsRoutingModule } from './team-contacts-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,NgbModule,FormsModule,
    TeamContactsRoutingModule
  ]
})
export class TeamContactsModule { }
