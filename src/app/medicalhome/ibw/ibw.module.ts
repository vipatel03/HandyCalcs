import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBWRoutingModule } from './ibw-routing.module';
import { IBWComponent } from './ibw.component';
@NgModule({
  declarations: [IBWComponent],
  imports: [
    CommonModule,
    IBWRoutingModule
  ]
})
export class IBWModule { }
