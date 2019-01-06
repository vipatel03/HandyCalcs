import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { HomeRoutes } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes),
        FormsModule
    ],
    declarations: [HomeComponent, SimpleCalculatorComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeModule {}
