import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { SupplierComponent } from './supplier/supplier.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    MainComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
