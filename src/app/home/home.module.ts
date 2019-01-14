import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule
    ],
    declarations: [HomeComponent, SimpleCalculatorComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeModule {}
