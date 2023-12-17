import { Component } from '@angular/core';
import { NavbarLink1_Component } from '../../components/navbar-link-1/navbar-link-1.component';
import { NavbarLink2_Component } from '../../components/navbar-link-2/navbar-link-2.component';
import { ShopyyLogo_Component } from '../../components/shopyy-logo/shopyy-logo.component';
import { SearchBar_Component } from '../../components/searchbar/searchbar.component';
import { HotDeals_Component } from '../../components/hot-deals/hot-deals.component';

@Component({
  selector: 'layout-header-with-search',
  standalone: true,
  imports: [
    NavbarLink1_Component,
    NavbarLink2_Component,
    ShopyyLogo_Component,
    SearchBar_Component,
    HotDeals_Component
  ],
  templateUrl: './header-with-search.layout.html',
  styleUrl: './header-with-search.layout.css'
})

export class HeaderWithSearch_Layout {}