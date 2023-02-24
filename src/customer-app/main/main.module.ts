import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';

import { MainComponent } from './main.component';
import { MainRoutingModule } from '../routing/main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
