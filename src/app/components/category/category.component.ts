import { Component, Input, } from '@angular/core';
import { iCategoryItem } from '../../interfaces/categoryitem.interface';

@Component({
    selector: 'category-component',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.css'
})
export class component_Category {
    @Input() item!: iCategoryItem;
}