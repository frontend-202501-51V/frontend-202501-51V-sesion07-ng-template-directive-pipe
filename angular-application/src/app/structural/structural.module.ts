import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralRoutingModule } from './structural-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralExamplesComponent } from './structural-examples.component';

@NgModule({
  declarations: [StructuralExamplesComponent],
  imports: [CommonModule, StructuralRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
})
export class StructuralModule {}
