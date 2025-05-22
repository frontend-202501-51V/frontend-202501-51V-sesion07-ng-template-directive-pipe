import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { IntroductionComponent } from './introduction/introduction.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule, FormsModule,
    IntroductionRoutingModule,
    NgbModule
  ]
})
export class IntroductionModule { }
