import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskPanelRoutingModule } from './task-panel-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    TaskPanelRoutingModule
  ]
})
export class TaskPanelModule { }
