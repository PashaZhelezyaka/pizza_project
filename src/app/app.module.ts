import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { InfotableComponent } from './component/infotable/infotable.component';
import { ItemInfoComponent } from './component/infotable/item-info/item-info.component';
import { PizzaListComponent } from './component/pizza-list/pizza-list.component';
import { PizzaCardComponent } from './component/pizza-list/pizza/pizza-card.component';
import { OrderFromComponent } from './component/order-from/order-from.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CustButtonComponent } from './shared/components/cust-button/cust-button.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfotableComponent,
    ItemInfoComponent,
    PizzaListComponent,
    PizzaCardComponent,
    OrderFromComponent,
    CustButtonComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
