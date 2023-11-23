import { Component } from '@angular/core';
import { Money } from 'src/app/model/money';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  exchangeRates: Money[] = [];

  constructor(private service: ExchangeService) {
    this.loadCurrencies();
  }

  async loadCurrencies() {
    this.exchangeRates = await this.service.fetchExchangeData();
  }
}
