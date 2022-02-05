import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CustomerComponent } from './customer/customer.component';
import {GetCustomerByCountryComponent } from './get-customer-by-country/get-customer-by-country.component';
import {GetCustomerByPhoneComponent } from './get-customer-by-phone/get-customer-by-phone.component';
import {GetCustomerByStateComponent } from './get-customer-by-state/get-customer-by-state.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'getCustomersByCountry',component:GetCustomerByCountryComponent},
  {path:'getCustomersByPhone',component:GetCustomerByPhoneComponent},
  {path:'getCustomersByState',component:GetCustomerByStateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
