import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Money } from 'src/app/model/money';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() valueChanged = new EventEmitter<Money>();
  @Input() money!: Money;
  currencies: String[] = ['usd', 'uah', 'eur', 'pln'];

  constructor() {}

  getAmount(newValue: string) {
    this.valueChanged.emit(this.money);
  }

  getCurrency(newValue: string) {
    this.valueChanged.emit(this.money);
  }
}
