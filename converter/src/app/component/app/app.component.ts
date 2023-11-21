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

  constructor(private service: ExchangeService) {
  }

  leftFormChanged(money: Money) {
    this.service.convertFromTo(money,this.rightMoney);
    // this.rightMoney = money;
  }

  rightFormChanged(money: Money) {
    this.service.convertFromTo(money,this.leftMoney);
    // this.leftMoney = money;
  }
}
