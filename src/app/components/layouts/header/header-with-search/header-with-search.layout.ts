import { Component } from '@angular/core';
import { NavbarLink1_Element } from '../../../elements/navbar-link-1/navbar-link-1.element';
import { NavbarLink2_Element } from '../../../elements/navbar-link-2/navbar-link-2.element';
import { ShopyyLogo_Element } from '../../../elements/shopyy-logo/shopyy-logo.element';
import { SearchBar_Element } from '../../../elements/searchbar/searchbar.element';
import { HotDeals_Element } from '../../../elements/hot-deals/hot-deals.element';

@Component({
  selector: 'layout-header-with-search',
  standalone: true,
  imports: [
    NavbarLink1_Element,
    NavbarLink2_Element,
    ShopyyLogo_Element,
    SearchBar_Element,
    HotDeals_Element
  ],
  templateUrl: './header-with-search.layout.html',
  styleUrl: './header-with-search.layout.css'
})

export class HeaderWithSearch_Layout {}