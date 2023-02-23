import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel();
  }
}
