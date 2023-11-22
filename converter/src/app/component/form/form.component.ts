import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Money } from 'src/app/model/money';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() moneyChanged = new EventEmitter<Money>();
  @Input() money!: Money;
  currencies: String[] = ['usd', 'uah', 'eur', 'pln'];

  constructor() {}

  amountChanged() {
    this.moneyChanged.emit(this.money);
  }

  currencyChanged() {
    this.moneyChanged.emit(this.money);
  }
}
