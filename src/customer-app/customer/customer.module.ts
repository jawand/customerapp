import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from '../controls/grid/grid.component';
import { CustomerRoutingModule } from '../routing/customer-routing.module';
import { MyInterceptor } from '../utility/http.interceptor';

import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
