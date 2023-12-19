import { Component } from '@angular/core';
import { NavbarLink1_Component } from '../../components/navbar-link-1/navbar-link-1.component';
import { NavbarLink2_Component } from '../../components/navbar-link-2/navbar-link-2.component';
import { ShopyyLogo_Component } from '../../components/shopyy-logo/shopyy-logo.component';
import { SearchBar_Component } from '../../components/searchbar/searchbar.component';
import { ShoppingCart_Icon } from '../../components/icons/shopping-cart/shopping-cart.icon';

@Component({
  selector: 'layout-header-with-search',
  standalone: true,
  imports: [
    NavbarLink1_Component,
    NavbarLink2_Component,
    ShopyyLogo_Component,
    SearchBar_Component,
    ShoppingCart_Icon
  ],
  templateUrl: './header-with-search.layout.html',
  styleUrl: './header-with-search.layout.css'
})

export class HeaderWithSearch_Layout { }