import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from '../controls/grid/grid.component';
import { CustomerRoutingModule } from '../routing/customer-routing.module';

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
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
