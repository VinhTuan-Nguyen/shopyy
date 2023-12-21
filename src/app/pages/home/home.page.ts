import { Component } from '@angular/core';
import { layout_HeaderWithSearch } from '../../layouts/header-with-search/header-with-search.layout';
import { layout_HomeBanner } from '../../layouts/home-banner/home-banner.layout';

@Component({
  selector: 'page_home',
  standalone: true,
  imports: [
    layout_HeaderWithSearch,
    layout_HomeBanner
  ],
  templateUrl:  './home.page.html',
  styleUrl: './home.page.css'
})

export class page_Home {}
