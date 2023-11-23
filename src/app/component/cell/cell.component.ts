import { Component, Input } from '@angular/core';
import { Money } from 'src/app/model/money';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input() money!: Money;

  get cellValue(): string {
    return (
      this.money.currency.toUpperCase() +
      '/UAH = ' +
      Number(this.money.amount).toFixed(2)
    );
  }
}
