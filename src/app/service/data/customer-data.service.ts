import { Injectable } from '@angular/core';

import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(
    private http:HttpClient) { 
    
  }

  retrieveAllCustomers(){
    return this.http.get('http://localhost:8091/jpa/customers/all')

  }
  retrieveCustomersByCountry(country: string){
    return this.http.get('http://localhost:8091/jpa/customers/country/'+country)

  }

  retrieveCustomersByPhone(phone: string){
    return this.http.get('http://localhost:8091/jpa/customers/phone/'+phone)

  }
  retrieveCustomersByState(state: string){
    return this.http.get('http://localhost:8091/jpa/customers/state/'+state)

  }
  searchCustomer(keyword: string){
    return this.http.get('http://localhost:8091/jpa/customers/find/'+keyword)

  }

  searchCustomersbyCountryandState(keyword: string , state:string){
    return this.http.get('http://localhost:8091/jpa/customers/find/'+keyword+'/'+state)

  }
}
