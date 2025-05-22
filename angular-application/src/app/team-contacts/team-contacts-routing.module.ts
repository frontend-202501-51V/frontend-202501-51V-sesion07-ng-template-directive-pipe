import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamContactsComponent } from './team-contacts.component';

const routes: Routes = [
  {
      path: '',
      component: TeamContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamContactsRoutingModule { }
