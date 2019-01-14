import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalHomeComponent } from './medicalhome.component';

const MedicalHomeRoutes: Routes = [
  {path: '', component: MedicalHomeComponent},
  {path: 'ibw', loadChildren: './ibw/ibw.module#IBWModule'},
];

@NgModule({
  imports: [RouterModule.forChild(MedicalHomeRoutes)],
  exports: [RouterModule]
})
export class MedicalHomeRoutingModule { }
