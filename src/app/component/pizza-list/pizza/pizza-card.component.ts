import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from "../../../interface/pizza.interface";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css'
})
export class PizzaCardComponent {
  @Input() card: Pizza;

  @Output() buttonClick = new EventEmitter();

  public click(pathImg: string): void {
    this.buttonClick.emit(pathImg);
  }
}
