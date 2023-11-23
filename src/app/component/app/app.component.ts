import { Component } from '@angular/core';
import { Money } from 'src/app/model/money';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  leftMoney = new Money('', 'usd');
  rightMoney = new Money('', 'uah');

  constructor(private service: ExchangeService) {}

  async leftFormChanged(money: Money) {
    const updatedMoney = await this.service.convertFromTo(
      money,
      this.rightMoney.currency
    );
    this.rightMoney = updatedMoney;
  }

  async rightFormChanged(money: Money) {
    const updatedMoney = await this.service.convertFromTo(
      money,
      this.leftMoney.currency
    );
    this.leftMoney = updatedMoney;
  }

  swapCurrencies() {
    const tmp = this.leftMoney;
    this.leftMoney = this.rightMoney;
    this.rightMoney = tmp;
  }
}
