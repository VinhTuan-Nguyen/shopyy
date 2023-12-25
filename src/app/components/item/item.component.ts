import { Component } from '@angular/core';
import { logo_VoucherTicket } from '../logo/voucher-ticket/voucher-ticket.logo';

@Component({
    selector: 'item-component',
    standalone: true,
    imports: [logo_VoucherTicket],
    templateUrl: './item.component.html',
    styleUrl: './item.component.css'
})

export class component_Item { }