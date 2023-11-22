import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app/app.component';
import { ExchangeService } from './service/exchange.service';
import { FormComponent } from './component/form/form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { CellComponent } from './component/cell/cell.component';
import { NumbersDirective } from './directive/numbers.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    CellComponent,
    NumbersDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
