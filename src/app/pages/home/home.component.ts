import { Component } from '@angular/core';
import { HeaderWithSearch_Layout } from '../../layouts/header-with-search/header-with-search.layout';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    HeaderWithSearch_Layout
  ],
  templateUrl:  './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {}
