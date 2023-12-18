import { Component } from '@angular/core';
import { Notification_Icon } from '../icons/notification/notification.icon';
import { Support_Icon } from '../icons/support/support.icon';
import { Language_Icon } from '../icons/language/language.icon';

@Component({
    selector: 'component-navbar-link-2',
    standalone: true,
    imports: [
        Notification_Icon,
        Support_Icon,
        Language_Icon
    ],
    templateUrl: './navbar-link-2.component.html',
    styleUrl: './navbar-link-2.component.css'
})

export class NavbarLink2_Component {}