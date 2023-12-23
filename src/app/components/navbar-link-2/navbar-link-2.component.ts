import { Component } from '@angular/core';
import { ico_Notify } from '../icons/notify/notify.ico';
import { ico_Support } from '../icons/support/support.ico';
import { ico_Language } from '../icons/language/language.ico';

@Component({
    selector: 'navbar-link-2-component',
    standalone: true,
    imports: [
        ico_Notify,
        ico_Support,
        ico_Language
    ],
    templateUrl: './navbar-link-2.component.html',
    styleUrl: './navbar-link-2.component.css'
})

export class component_NavbarLink2 {}