import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { component_Item } from '../../components/item/item.component';

@Component({
  selector: 'today-suggestion-layout',
  standalone: true,
  imports: [
    CommonModule,
    component_Item
  ],
  templateUrl: './today-suggestion.layout.html',
  styleUrl: './today-suggestion.layout.css'
})

export class layout_TodaySuggestion {
  suggestionList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
}