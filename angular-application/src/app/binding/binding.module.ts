import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingExamplesComponent } from './binding-examples.component';

@NgModule({
  declarations: [BindingExamplesComponent],
  imports: [CommonModule, BindingRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
})
export class BindingModule {}
