import { Component, OnInit } from '@angular/core';

import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-get-customer-by-state',
  templateUrl: './get-customer-by-state.component.html',
  styleUrls: ['./get-customer-by-state.component.css']
})
export class GetCustomerByStateComponent implements OnInit {

  state: string = ''
  errorMessage: string = ''
  successMessage: string = ''
  customers: any;

  constructor(private getAllCustomers: CustomerDataService) { }

  ngOnInit(): void {
  }

  handleErrorResponse(error: any) {
    this.errorMessage = error.message + ' as ' + error.details

  }
  handleSubmit() {
    this.getAllCustomers.retrieveCustomersByState(this.state).subscribe((data: any) => {
      this.customers = data;
      console.log(this.customers);
      this.successMessage = "success"
    },
      error => this.handleErrorResponse(error)
    )
  }

}
