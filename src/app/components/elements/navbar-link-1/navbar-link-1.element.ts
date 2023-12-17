import { Component } from '@angular/core';
import { DownLoadQRCode_Element } from '../download-qr-code/download-qr-code.element';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'element-navbar-link-1',
    standalone: true,
    imports: [
        CommonModule,
        DownLoadQRCode_Element
    ],
    templateUrl: './navbar-link-1.element.html',
    styleUrl: './navbar-link-1.element.css'
})

export class NavbarLink1_Element {
    isHidden = true;
    displayQR(hover: boolean) {
        this.isHidden = hover ? false : true;
    }

    goToLink(url: string) {
        window.open(url, '_blank');
    }
}