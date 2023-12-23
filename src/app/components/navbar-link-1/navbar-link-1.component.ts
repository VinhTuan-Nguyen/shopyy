import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { component_DownLoadQRCode } from '../download-qr-code/download-qr-code.component';

@Component({
    selector: 'navbar-link-1-component',
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