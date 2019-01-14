import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IBWComponent } from './ibw.component';

const IBWRoutes: Routes = [{
  path: '', component: IBWComponent
}];

@NgModule({
  imports: [RouterModule.forChild(IBWRoutes)],
  exports: [RouterModule]
})
export class IBWRoutingModule { }
