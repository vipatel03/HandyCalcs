import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHomeComponent } from './medicalhome.component';
import { MedicalHomeRoutingModule } from './medicalhome-routing.module';
@NgModule({
  declarations: [MedicalHomeComponent],
  imports: [
    CommonModule,
    MedicalHomeRoutingModule
  ]
})
export class MedicalHomeModule { }
