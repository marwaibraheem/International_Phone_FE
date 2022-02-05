import { Component, OnInit } from '@angular/core';

import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-get-customer-by-country',
  templateUrl: './get-customer-by-country.component.html',
  styleUrls: ['./get-customer-by-country.component.css']
})
export class GetCustomerByCountryComponent implements OnInit {

  country :string= ''
  errorMessage :string= ''
  successMessage :string = ''
  customers :any;

  constructor(private getAllCustomers: CustomerDataService) { }

  ngOnInit(): void {
  }

  
  handleErrorResponse(error:any) {
      this.errorMessage =error.message + ' as ' + error.details

  }
  handleSubmit() {
    this.getAllCustomers.retrieveCustomersByCountry(this.country).subscribe((data:any) => {
      this.customers = data;
      console.log(this.customers);
      this.successMessage="success"
    },
      error => this.handleErrorResponse(error)
     ) 
    }


}
