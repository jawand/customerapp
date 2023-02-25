import { Component } from '@angular/core';
import { CustomerModel } from './customer.model';

import { BaseLogger } from "../utility/app.logger";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry } from 'rxjs';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: CustomerModel = new CustomerModel();
  CustomerModels: Array<CustomerModel> = new Array<CustomerModel>();
  Disable: boolean = false;
  logger: BaseLogger;

  constructor(_logger: BaseLogger, public httpClient: HttpClient) {
    this.logger = _logger;
    this.logger.Log();

    this.GetCustomers().subscribe((lst: {}) => {
      this.CustomerModels = lst as Array<CustomerModel>;
    });
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

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

  PostToServer() {
    this.Disable = true;
    var dto: any = {};
    dto.customerCode = this.CustomerModel.CustomerCode;
    dto.customerName = this.CustomerModel.CustomerName;
    dto.customerAmount = this.CustomerModel.CustomerAmount;

    this.CreateCustomer(dto).subscribe((data: {}) => {
      this.CustomerModel = new CustomerModel();

      this.GetCustomers().subscribe((lst: {}) => {
        this.CustomerModels = lst as Array<CustomerModel>;
        this.Disable = false;
      });
    });
  }

  CreateCustomer(data: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/customers',
      data).pipe(retry(1), catchError(this.Error));
  }

  GetCustomers(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/customers')
      .pipe(retry(1), catchError(this.Error));
  }

  Error(res: any): any {
    console.debug(JSON.stringify(res));
    return 'error';
  }


}
