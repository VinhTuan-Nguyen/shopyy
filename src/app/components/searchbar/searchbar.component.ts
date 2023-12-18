import { Component } from '@angular/core';
import { Search_Icon } from '../icons/search/search.icon';

@Component({
    selector: 'component-searchbar',
    standalone: true,
    imports: [
        Search_Icon
    ],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.css'
})

export class SearchBar_Component {}