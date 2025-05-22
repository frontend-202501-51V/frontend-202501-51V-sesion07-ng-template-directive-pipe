import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralExamplesComponent } from './structural-examples.component';

const routes: Routes = [
  {
    path: '',
    component: StructuralExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralRoutingModule { }
