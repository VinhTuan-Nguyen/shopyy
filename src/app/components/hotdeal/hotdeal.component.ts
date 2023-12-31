import { Component, Input } from '@angular/core';
import { iHotDeal } from '../../interfaces/hotdeal.interface';

@Component({
    selector: 'hotdeal-component',
    standalone: true,
    templateUrl: './hotdeal.component.html',
    styleUrl: './hotdeal.component.css'
})
export class component_Hotdeal {
    @Input() hotdeal!: iHotDeal
}