import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForComponent } from './for/for.component';

const routes: Routes = [
  {
    path: '',
    component :ForComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForRoutingModule { }
