import { Component } from '@angular/core';
import { component_NavbarLink1 } from '../../components/navbar-link-1/navbar-link-1.component';
import { component_NavbarLink2 } from '../../components/navbar-link-2/navbar-link-2.component';
import { component_ShopyyLogo } from '../../components/shopyy-logo/shopyy-logo.component';
import { component_SearchBar } from '../../components/searchbar/searchbar.component';
import { ico_ShoppingCart } from '../../components/icons/shopping-cart/shopping-cart.ico';

@Component({
  selector: 'header-with-search-layout',
  standalone: true,
  imports: [
    component_NavbarLink1,
    component_NavbarLink2,
    component_ShopyyLogo,
    component_SearchBar,
    ico_ShoppingCart
  ],
  templateUrl: './header-with-search.layout.html',
  styleUrl: './header-with-search.layout.css'
})

export class layout_HeaderWithSearch { }