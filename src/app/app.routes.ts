import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/admin/layouts/admin-layouts/admin-layouts.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/admin/pages/summary/summary.component'),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./modules/admin/pages/projects/projects.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
