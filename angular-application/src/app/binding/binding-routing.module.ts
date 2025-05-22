import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingExamplesComponent } from './binding-examples.component';

const routes: Routes = [
  {
    path: '',
    component: BindingExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingRoutingModule { }
