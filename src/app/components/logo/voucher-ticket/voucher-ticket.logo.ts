import { Component, Input } from '@angular/core';

@Component({
    selector: 'voucher-ticket-logo',
    standalone: true,
    templateUrl: './voucher-ticket.logo.html',
    styleUrl: './voucher-ticket.logo.css'
})
export class logo_VoucherTicket {
    @Input() voucherValue!: string;
}