import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OrderService } from "./order.service";

@Component({
  selector: 'app-order-from',
  templateUrl: './order-from.component.html',
  styleUrl: './order-from.component.css'
})
export class OrderFromComponent {

  constructor(private orderService: OrderService) {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.min(2),
      Validators.pattern('[a-zA-Zа-яА-ЯёЁ]+')
    ]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  isSubmit: boolean = false;

  submit() {
    if(this.form.invalid) return;
    console.log(this.form.value, "this.form.value")
    this.orderService.addOrder(this.form.value).subscribe(res => {
      console.log(res)
      this.isSubmit = true;
      this.form.reset()
    })
  }

  onKeyDown(event: KeyboardEvent) {
    if(event.key === '.') {
      event.preventDefault();
    }
  }

  onAlertClose() {
    this.isSubmit = false;
  }
}
