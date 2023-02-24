import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from '../routing/customer-routing.module';

import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }