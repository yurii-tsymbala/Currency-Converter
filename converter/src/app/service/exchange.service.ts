import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor() {}

  convertFromTo(fromCurrency: string, toCurrency: string) {
    const link = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.json`;
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
