import { Component } from '@angular/core';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'converter';

  constructor(private service: ExchangeService) {
    service.convertFromTo("usd","uah");

  }
}
