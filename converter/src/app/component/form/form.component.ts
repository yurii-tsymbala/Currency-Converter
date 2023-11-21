import { Component, EventEmitter, Output } from '@angular/core';
import { Money } from 'src/app/model/money';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() valueChanged = new EventEmitter<Money>();
  amountInput: string = '';
  currencyInput: string = '';

  constructor() {}

  getAmount(newValue: string) {
    this.amountInput = newValue;
    console.log(newValue);
  }

  getCurrency(newValue: string) {
    this.currencyInput = newValue;
  }
}
