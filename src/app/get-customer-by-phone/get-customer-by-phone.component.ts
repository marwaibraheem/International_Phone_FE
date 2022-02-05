import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-get-customer-by-phone',
  templateUrl: './get-customer-by-phone.component.html',
  styleUrls: ['./get-customer-by-phone.component.css']
})
export class GetCustomerByPhoneComponent implements OnInit {

  phone :string= ''
  errorMessage :string= ''
  successMessage :string = ''
  customer :any;

  constructor(private getAllCustomers: CustomerDataService) { }

  ngOnInit(): void {
  }

  handleErrorResponse(error:any) {
    this.errorMessage =error.message + ' as ' + error.details

}
handleSubmit() {
  this.getAllCustomers.retrieveCustomersByPhone(this.phone).subscribe((data:any) => {
    this.customer = data;
    console.log(this.customer);
    this.successMessage="success"
  },
    error => this.handleErrorResponse(error)
   ) 
  }

}
