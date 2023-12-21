import { Component, Input } from '@angular/core';
import { iHotDeal } from '../../interfaces/hotdeal.interface';

@Component({
    selector: 'component-hotdeals',
    standalone: true,
    imports: [
    ],
    templateUrl: './hotdeals.component.html',
    styleUrl: './hotdeals.component.css'
})

export class Hotdeals_Component {
    @Input() Hotdeal!: iHotDeal
}