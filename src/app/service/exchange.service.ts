import { Injectable } from '@angular/core';
import { Money } from '../model/money';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {

  convertFromTo(changedMoney: Money, convertedCurrency: string): Promise<Money> {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/';
    const currencies = `currencies/${changedMoney.currency}/${convertedCurrency}.json`;
    const link = url.concat(currencies);

    return new Promise<Money>(function (myResolve, myReject) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', link);
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.response);

          const exchangeRate = Number(data[convertedCurrency]);
          const exchangeAmount = Number(changedMoney.amount);
          const convertedMoneyAmount = (exchangeRate * exchangeAmount).toString();

          const updatedMoney = new Money(convertedMoneyAmount, convertedCurrency);
          myResolve(updatedMoney);
        } else {
          myReject('Convert Error');
        }
      };
      xhr.send();
    });
  }

  async fetchExchangeData(): Promise<Money[]> {
    const usdMoney = new Money('1', 'usd');
    const eurMoney = new Money('1', 'eur');
    const usdRate = await this.convertFromTo(usdMoney, 'uah');
    usdRate.currency = usdMoney.currency;
    const eurRate = await this.convertFromTo(eurMoney, 'uah');
    eurRate.currency = eurMoney.currency;

    return new Promise<Money[]>(function (myResolve) {
      myResolve([usdRate, eurRate]);
    });
  }
}
