import { Component } from '@angular/core';
import { Search_Icon } from '../icons/search/search.icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'component-searchbar',
    standalone: true,
    imports: [
        CommonModule,
        Search_Icon
    ],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.css'
})

export class SearchBar_Component {
    searchKeyWords = [
        "Áo 0đ",
        "Dép 0đ",
        "Săn Sale iPhone 14 Pro Max 1k",
        "Áo Khoác 1k Freeship",
        "Vợt Cầu Lông",
        "Đơn 0k",
        "Giày Đá Bóng Giá Rẻ 1k",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
        "Súng M1887",
    ];
}