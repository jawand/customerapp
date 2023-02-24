import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';

import { MainComponent } from './main.component';
import { MainRoutingModule } from '../routing/main-routing.module';
import { BaseLogger, ConsoleLogger, DatabaseLogger } from '../utility/app.logger';

export const CUSTOM_HOME_LOGGER = new InjectionToken('custom-home-logger');

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
  providers: [{ // Centeralized DI Container
    provide: BaseLogger,
    useClass: DatabaseLogger
  },
  { // by using token we are using Conditional DI
    provide: CUSTOM_HOME_LOGGER,
    useClass: ConsoleLogger
  }],
  bootstrap: [MainComponent]
})
export class MainModule { }
