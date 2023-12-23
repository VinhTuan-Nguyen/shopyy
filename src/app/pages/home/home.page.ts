import { Component } from '@angular/core';
import { layout_HeaderWithSearch } from '../../layouts/header-with-search/header-with-search.layout';
import { layout_HomeBanner } from '../../layouts/home-banner/home-banner.layout';
import { layout_CategoryCarousel } from '../../layouts/category-carousel/category-carousel.layout';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    layout_HeaderWithSearch,
    layout_HomeBanner,
    layout_CategoryCarousel
  ],
  templateUrl:  './home.page.html',
  styleUrl: './home.page.css'
})

export class page_Home {}
