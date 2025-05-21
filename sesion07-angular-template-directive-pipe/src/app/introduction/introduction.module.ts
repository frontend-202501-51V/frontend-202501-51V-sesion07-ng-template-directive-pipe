import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    NgbAlertModule
  ]
})
export class IntroductionModule { }
