import { Injectable } from '@angular/core';
import { Money } from '../model/money';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor() {}

  convertFromTo() {
    const fromMoney = new Money("100", Currency.usd);
    const toMoney = new Money("100", Currency.uah);
    const link = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromMoney.currency}/${toMoney.currency}.json`;
    return new Promise<string>(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', link);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log(data.uah);
        } else {
          myReject('Error');
        }
      };
      xhr.send();
    });
  }
}
