import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { InfoComponent } from './component/infotable/info.component';
import { InfotableComponent } from './component/infotable/infotable.component';
import { ItemInfoComponent } from './component/infotable/item-info/item-info.component';
import { PizzaListComponent } from './component/pizza-list/pizza-list.component';
import { PizzaComponent } from './component/pizza-list/pizza/pizza.component';
import { OrderFromComponent } from './component/order-from/order-from.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    InfotableComponent,
    ItemInfoComponent,
    PizzaListComponent,
    PizzaComponent,
    OrderFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
