import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  isHidden = true;

  displayQR (hover: boolean) {
    this.isHidden = hover ? false : true;
  }

  goToLink(url: string){
    window.open(url, '_blank');
  }
}
