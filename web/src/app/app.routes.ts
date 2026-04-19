import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () => import('./home/home').then((m) => m.Home) },
  {
    path: 'first',
    loadComponent: () =>
      import('./pages/first/first').then((m) => m.First),
  },
];
