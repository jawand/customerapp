import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();

  Add(): void {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new CustomerModel();
  }

  HasError(typeofValidator: string, controlName: string): Boolean {
    return this.CustomerModel
      .formCustomerGroup
      .controls[controlName]
      .hasError(typeofValidator);
  }
}
