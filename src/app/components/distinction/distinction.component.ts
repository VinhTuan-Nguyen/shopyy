import { Component, Input } from '@angular/core';
import { iDistinction } from '../../interfaces/distinction.interface';

@Component({
    selector: 'component-distinction',
    standalone: true,
    imports: [
    ],
    templateUrl: './distinction.component.html',
    styleUrl: './distinction.component.css'
})

export class Distinction_Component {
    @Input() distinction!: iDistinction
}