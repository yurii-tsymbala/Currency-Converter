import { Component, Input } from '@angular/core';
import { Money } from 'src/app/model/money';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input() money!: Money;
}
