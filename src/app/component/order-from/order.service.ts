import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OrderPizza } from "../../interface/pizza.interface";
import { delay, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(body: OrderPizza): Observable<string>{
    //Тестовый запрос
    // this.http.post('test', body)
    return of('Заказ принят').pipe(delay(1000));
  }
}
