import { Injectable } from '@angular/core';
import { Money } from '../model/money';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor() {}

  async getExchangeData(): Promise<Money[]> {
    const moneyUAH = new Money('', 'uah');
    const moneyUSD = new Money('', 'usd');
    const moneyEUR = new Money('', 'eur');
    const usdToUah = await this.convertFromTo(moneyUSD, moneyUAH);
    const eurToUah = await this.convertFromTo(moneyEUR, moneyUAH);
    return new Promise<Money[]>(function (myResolve, myReject) {
      myResolve([usdToUah, eurToUah]);
    });
  }

  convertFromTo(fromMoney: Money, toMoney: Money): Promise<Money> {
    const link = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromMoney.currency}/${toMoney.currency}.json`;
    return new Promise<Money>(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', link);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.response);
          const exchangeRate = Number(data[toMoney.currency]);
          const moneyAmount = Number(fromMoney.amount);
          const result = exchangeRate * moneyAmount;
          myResolve(new Money(result.toString(), toMoney.currency));
          console.log(result);
        } else {
          myReject('Error');
        }
      };
      xhr.send();
    });
  }
}
