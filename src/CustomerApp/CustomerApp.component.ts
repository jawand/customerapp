import { Component } from '@angular/core';
import { CustomerModel } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.component.html',
  styleUrls: ['./CustomerApp.component.css']
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
