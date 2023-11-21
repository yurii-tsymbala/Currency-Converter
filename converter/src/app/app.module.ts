import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app/app.component';
import { ExchangeService } from './service/exchange.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
