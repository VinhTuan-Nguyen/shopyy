import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'arrow-node-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './arrow-node.component.html',
    styleUrl: './arrow-node.component.css'
})
export class component_ArrowNode {
    @Input() destination!: string;
}