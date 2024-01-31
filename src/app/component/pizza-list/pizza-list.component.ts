import { Component, OnInit } from '@angular/core';
import { Pizza } from "../../interface/pizza.interface";
import { PizzaService } from "./pizza.service";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent implements OnInit {
  cards: Pizza[] = [];
  public imageOpen = false;
  public id: number
  selectImg: string;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.cards = this.pizzaService.getCardsPizza();
  }

  public onClick(pathImg: string): void {
    this.imageOpen = true;
    this.selectImg = pathImg;
  }
}
