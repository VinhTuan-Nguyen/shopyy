import { Component, Input } from '@angular/core';
import { iDistinction } from '../../interfaces/distinction.interface';

@Component({
    selector: 'component_distinction',
    standalone: true,
    imports: [
    ],
    templateUrl: './distinction.component.html',
    styleUrl: './distinction.component.css'
})

export class component_Distinction {
    @Input() distinction!: iDistinction
}