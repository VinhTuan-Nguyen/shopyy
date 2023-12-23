import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { component_Carousel } from '../../components/carousel/carousel.component';
import { component_Hotdeal } from '../../components/hotdeal/hotdeal.component';
import { component_Distinction } from '../../components/distinction/distinction.component';
import { iDistinction } from '../../interfaces/distinction.interface';
import { iHotDeal } from '../../interfaces/hotdeal.interface';

@Component({
  selector: 'home-banner-layout',
  standalone: true,
  imports: [
    CommonModule,
    component_Carousel,
    component_Hotdeal,
    component_Distinction
  ],
  templateUrl: './home-banner.layout.html',
  styleUrl: './home-banner.layout.css'
})

export class layout_HomeBanner implements OnInit {

  Hotdeal: iHotDeal[] = [];
  Distinctions: iDistinction[] = [];

  ngOnInit(): void {
    fetch('/assets/dummy-data/hot-deal.json')
      .then(res => res.json())
      .then(jsonData => this.Hotdeal = jsonData);
    fetch('/assets/dummy-data/distinction.json')
      .then(res => res.json())
      .then(jsonData => this.Distinctions = jsonData);
  }
}