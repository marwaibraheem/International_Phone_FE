import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCustomerByCountryComponent } from './get-customer-by-country/get-customer-by-country.component';
import { GetCustomerByPhoneComponent } from './get-customer-by-phone/get-customer-by-phone.component';
import { GetCustomerByStateComponent } from './get-customer-by-state/get-customer-by-state.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    GetCustomerByCountryComponent,
    GetCustomerByPhoneComponent,
    GetCustomerByStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
