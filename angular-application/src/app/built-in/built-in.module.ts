import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuiltInRoutingModule } from './built-in-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    BuiltInRoutingModule
  ]
})
export class BuiltInModule { }
