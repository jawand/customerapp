import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

import { BaseLogger } from "../utility/app.logger";

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();

  logger: BaseLogger;

  constructor(_logger: BaseLogger) {
    this.logger = _logger;
    this.logger.Log();
  }

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

  SelectedCustomer(_selected: CustomerModel) {
    this.CustomerModel = _selected;
  }
}
