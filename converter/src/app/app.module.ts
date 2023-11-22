import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app/app.component';
import { ExchangeService } from './service/exchange.service';
import { FormComponent } from './component/form/form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { CellComponent } from './component/cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    CellComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
