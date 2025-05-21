import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'attribute',
    loadChildren: () =>
      import('./attribute/attribute.module').then((m) => m.AttributeModule),
  },
  {
    path: 'binding',
    loadChildren: () =>
      import('./binding/binding.module').then((m) => m.BindingModule),
  },
  {
    path: 'team-contacts',
    loadChildren: () =>
      import('./team-contacts/team-contacts.module').then((m) => m.TeamContactsModule),
  },
  {
    path: 'built-in',
    loadChildren: () =>
      import('./built-in/built-in.module').then((m) => m.BuiltInModule),
  },
  {
    path: 'custom',
    loadChildren: () =>
      import('./custom/custom.module').then((m) => m.CustomModule),
  },
  {
    path: 'custom-pipes',
    loadChildren: () =>
      import('./custom-pipes/custom-pipes.module').then((m) => m.CustomPipesModule),
  },
  {
    path: 'introduction',
    loadChildren: () =>
      import('./introduction/introduction.module').then((m) => m.IntroductionModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'structural',
    loadChildren: () =>
      import('./structural/structural.module').then((m) => m.StructuralModule),
  },
  {
    path: 'task-panel',
    loadChildren: () =>
      import('./task-panel/task-panel.module').then((m) => m.TaskPanelModule),
  },
  {
    path: 'report-table',
    loadChildren: () =>
      import('./report-table/report-table.module').then((m) => m.ReportTableModule),
  },
];
