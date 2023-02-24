import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierRoutingModule } from '../routing/supplier-routing.module';

import { SupplierComponent } from './supplier.component';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
