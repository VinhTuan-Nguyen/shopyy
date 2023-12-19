import { Component } from '@angular/core';
import { HeaderWithSearch_Layout } from '../../layouts/header-with-search/header-with-search.layout';
import { HomeBanner_Layout } from '../../layouts/home-banner/home-banner.layout';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    HeaderWithSearch_Layout,
    HomeBanner_Layout
  ],
  templateUrl:  './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {}
