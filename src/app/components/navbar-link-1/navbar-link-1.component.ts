import { Component } from '@angular/core';
import { DownLoadQRCode_Component } from '../download-qr-code/download-qr-code.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'component-navbar-link-1',
    standalone: true,
    imports: [
        CommonModule,
        DownLoadQRCode_Component
    ],
    templateUrl: './navbar-link-1.component.html',
    styleUrl: './navbar-link-1.component.css'
})

export class NavbarLink1_Component {
    isHidden = true;
    displayQR(hover: boolean) {
        this.isHidden = hover ? false : true;
    }

    goToLink(url: string) {
        window.open(url, '_blank');
    }
}