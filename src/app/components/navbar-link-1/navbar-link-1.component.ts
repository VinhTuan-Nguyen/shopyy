import { Component } from '@angular/core';
import { component_DownLoadQRCode } from '../download-qr-code/download-qr-code.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'component_navbarlink1',
    standalone: true,
    imports: [
        CommonModule,
        component_DownLoadQRCode
    ],
    templateUrl: './navbar-link-1.component.html',
    styleUrl: './navbar-link-1.component.css'
})

export class component_NavbarLink1 {
    isHidden = true;
    displayQR(hover: boolean) {
        this.isHidden = hover ? false : true;
    }

    goToLink(url: string) {
        window.open(url, '_blank');
    }
}