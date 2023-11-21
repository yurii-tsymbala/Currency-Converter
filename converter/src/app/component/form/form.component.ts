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

  constructor() {}

  getAmount(newValue: string) {
    this.money.amount = newValue;
    const updatedMoney = new Money(this.money.amount, this.money.currency);
    this.valueChanged.emit(updatedMoney)
  }

  getCurrency(newValue: string) {
    this.money.currency = newValue;
    const updatedMoney = new Money(this.money.amount, this.money.currency);
    this.valueChanged.emit(updatedMoney)
  }
}
