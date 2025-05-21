import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomPipesRoutingModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CustomPipesModule { }
