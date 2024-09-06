import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    },
    {
        path: 'errors',
        loadChildren: () => import('../app/pages/errors/errors.module').then((m) => m.ErrorsModule),
    },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full'
      },
];
