import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full',
    },
    {
        path: '', component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './home/home.module#HomeModule'
        },
       ]
    }
];
