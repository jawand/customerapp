import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  {
    path: 'Customer',
    loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'Supplier',
    loadChildren: () => import('../supplier/supplier.module').then(m => m.SupplierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
