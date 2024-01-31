import { Injectable } from '@angular/core';
import { PizzaModel } from "./pizza/pizza.model";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  private cardsPizza: PizzaModel[] = [
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza1.png',
      'Мясная Делюкс',
      'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza2.png',
      'Морская премиум',
      'Перец, сыр, креветки, кальмары, мидии, лосось',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza3.png',
      'Бекон и сосиски',
      'Бекон, сыр, сосиски, ананас, томатная паста',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza4.png',
      'Куриная Делюкс',
      'Курица, сыр, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza5.png',
      'Барбекю Премиум',
      'Свинина BBQ, соус Барбекю, сыр, курица, соус для пиццы, соус чили',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza6.png',
      'Пепперони Дабл',
      'Пепперони, сыр, колбаса 2 видов:обжаренная и вареная',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza7.png',
      'Куриное Трио',
      'Жареная курица, тушеная курица,куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    ),
    new PizzaModel(
      Math.floor(Math.random() * 1000),
      './assets/img/pizza/pizza8.png',
      'Сырная',
      'Сыр Джюгас, сыр плесенью, сыр моцарелла, сыр секретный',
    ),
  ]

  getCardsPizza(): PizzaModel[] {
    return this.cardsPizza.slice()
  }
}
