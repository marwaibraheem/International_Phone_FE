import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  keyword: string = '';
  state: string = '';
  allCustomers: any;
  constructor(private getAllCustomers: CustomerDataService) { }

  ngOnInit() {
    this.retriveCustomer();
  }

  retriveCustomer() {
    this.getAllCustomers.retrieveAllCustomers().subscribe(
      response => {
        console.log("test")
        this.allCustomers = response
      }
    )
  }

  handleSearch() {
    if (this.keyword != '') {
      this.getAllCustomers.searchCustomer(this.keyword).subscribe((data: any) => {
        this.allCustomers = data;
      }
      )
    } else {
      this.retriveCustomer();
    }
  }

  handleState() {
    if (this.state != '') {
      this.getAllCustomers.retrieveCustomersByState(this.state).subscribe((data: any) => {
        this.allCustomers = data;
      }
      )
    } else {
      this.retriveCustomer();
    }
  }

  handleSubmit() {
    if (this.state != '' && this.keyword != '') {
      this.getAllCustomers.searchCustomersbyCountryandState(this.keyword,this.state).subscribe((data: any) => {
        this.allCustomers = data;
      }
      )
    }else if(this.state != '' && this.keyword == '') {
      this.getAllCustomers.retrieveCustomersByState(this.state).subscribe((data: any) => {
        this.allCustomers = data;
      }
      )
    } 
    else {
      this.retriveCustomer();
    }
  }


}
