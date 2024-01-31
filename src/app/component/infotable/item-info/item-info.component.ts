import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrl: './item-info.component.css'
})
export class ItemInfoComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;
}
