import { Component } from '@angular/core';
import { ico_Search } from '../icons/search/search.ico';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'searchbar-component',
    standalone: true,
    imports: [
        CommonModule,
        ico_Search
    ],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.css'
})
export class component_SearchBar {
    searchPlaceHoder = "Shopyy bao ship 0Đ - Đăng ký ngay!";
    searchKeyWords = [
        "Áo 0đ",
        "Dép 0đ",
        "Săn Sale iPhone 14 Pro Max 1k",
        "Áo Khoác 1k Freeship",
        "Vợt Cầu Lông",
        "Đơn 0k",
        "Giày Đá Bóng Giá Rẻ 1k",
        "Súng M1887"
    ];
    isHidden = true;

    showListBox(e: boolean) {
        this.isHidden = e ? false : true;
    }
}