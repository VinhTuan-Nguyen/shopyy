import { Component } from '@angular/core';
import { ico_Notification } from '../icons/notification/notification.ico';
import { ico_Support } from '../icons/support/support.ico';
import { ico_Language } from '../icons/language/language.ico';

@Component({
    selector: 'component_navbarlink2',
    standalone: true,
    imports: [
        ico_Notification,
        ico_Support,
        ico_Language
    ],
    templateUrl: './navbar-link-2.component.html',
    styleUrl: './navbar-link-2.component.css'
})

export class component_NavbarLink2 {}