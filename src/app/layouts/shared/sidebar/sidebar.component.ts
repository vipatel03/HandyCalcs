import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

// Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/',
    title: 'Home',
    type: 'link',
    icontype: 'nc-icon nc-bank'
}, {
    path: '/finance',
    title: 'Financial',
    type: 'sub',
    icontype: 'nc-icon nc-layout-11',
    children: [
        { path: '/', title: 'COMING SOON', ab: 'CS' },
        // { path: 'grid', title: 'Grid System', ab: 'GS' },
        // { path: 'panels', title: 'Panels', ab: 'P' },
        // { path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA' },
        // { path: 'notifications', title: 'Notifications', ab: 'N' },
        // { path: 'icons', title: 'Icons', ab: 'I' },
        // { path: 'typography', title: 'Typography', ab: 'T' }
    ]
}, {
    path: '/medicalhome',
    title: 'Medical',
    type: 'sub',
    icontype: 'nc-icon nc-ruler-pencil',
    children: [
        { path: '/medicalhome/ibw', title: 'IBW', ab: 'IBW' },
        { path: '/', title: 'COMING SOON', ab: 'CS' },
        // { path: 'extended', title: 'Extended Forms', ab: 'EF' },
        // { path: 'validation', title: 'Validation Forms', ab: 'VF' },
        // { path: 'wizard', title: 'Wizard', ab: 'W' }
    ]
}, {
    path: '/comingsoon',
    title: 'COMING SOON',
    type: 'link',
    icontype: 'nc-icon nc-box'

},
 {
    path: '/medicalhome/ibw',
    title: 'IBW CALC',
    type: 'link',
    icontype: 'nc-icon nc-box'

}
];

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit, AfterViewInit {
    public menuItems: any[];
    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit() {
    }
}
