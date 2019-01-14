import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
export const AppRoutes: Routes = [
    {
        path: '', component: AdminLayoutComponent,
        children: [
            {
                path: '', loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'medicalhome', loadChildren: './medicalhome/medicalhome.module#MedicalHomeModule'
            }
        ]
    },
    {
        path: '', redirectTo: '', pathMatch: 'full',
    },
];
