import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SidebarModule } from './layouts/shared/sidebar/sidebar.module';
import { FooterModule } from './layouts/shared/footer/footer.module';
import { NavbarModule} from './layouts/shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AppRoutes } from './app.routing';

@NgModule({
    imports:      [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        NgbModule.forRoot(),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
