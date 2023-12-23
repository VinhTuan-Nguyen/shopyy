import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { iCarousel } from '../../interfaces/carousel.interface';

@Component({
    selector: 'carousel-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css'
})
export class component_Carousel implements OnInit {

    currentIndex = 0;
    transformValue = '';
    interval: any;
    slides: any;

    ngOnInit() {
        fetch('assets/dummy-data/carousel.json')
            .then(res => res.json())
            .then(jsonData => {
                this.slides = jsonData;
            });
        this.startAutoPlay();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateTransform();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateTransform();
    }

    updateTransform() {
        this.transformValue = `translateX(-${this.currentIndex * 100}%)`;
    }

    startAutoPlay() {
        setInterval(() => { this.nextSlide(); }, 3000);
    }
}