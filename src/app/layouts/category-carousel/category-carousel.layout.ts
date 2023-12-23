import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { component_Category } from '../../components/category/category.component';
import { component_ArrowNode } from '../../components/arrow-node/arrow-node.component';
import { iCategoryItem } from '../../interfaces/categoryitem.interface';

@Component({
  selector: 'category-carousel-layout',
  standalone: true,
  imports: [
    CommonModule,
    component_Category,
    component_ArrowNode
  ],
  templateUrl: './category-carousel.layout.html',
  styleUrl: './category-carousel.layout.css'
})
export class layout_CategoryCarousel implements OnInit {

  CategoryItem: iCategoryItem[] = [];

  currentIndex = 0;
  transformValue = '0%';
  totalIndex = 0;
  remainLength = 0;
  des = {
    prev: "prev",
    next: "next"
  };

  ngOnInit() {
    fetch('assets/dummy-data/category-item.json')
      .then(res => res.json())
      .then(jsonData => {
        this.CategoryItem = jsonData;
        this.totalIndex = Math.floor(this.CategoryItem.length / 20);
        this.totalIndex = this.CategoryItem.length % 20 != 0 ? this.totalIndex : this.totalIndex - 1;
        this.remainLength = Math.round((this.CategoryItem.length / 20 - this.totalIndex) * 100);
        this.remainLength = this.remainLength % 5 == 0 ? this.remainLength + 5 : this.remainLength;
      });
  }

  nextSlide() {
    if (this.currentIndex <= this.totalIndex) {
      this.currentIndex += 1;
      this.updateTransform();
    }
  }

  prevSlide() {
    if (this.currentIndex >= 0) {
      this.currentIndex -= 1;
      this.updateTransform();
    }
  }

  updateTransform() {
    this.transformValue = this.totalIndex - this.currentIndex != 0 ?
      `translateX(-${this.currentIndex * 100}%)` :
      `translateX(-${this.currentIndex * 100 - (100 - this.remainLength)}%)`;
  }
}