import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cust-button',
  templateUrl: './cust-button.component.html',
  styleUrl: './cust-button.component.css'
})
export class CustButtonComponent {
  @Input() text: string;
  @Input() type?: string;
  @Input() disabled?: boolean  = true;

}
