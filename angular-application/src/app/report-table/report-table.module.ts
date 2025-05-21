import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportTableRoutingModule } from './report-table-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReportTableRoutingModule
  ]
})
export class ReportTableModule { }
