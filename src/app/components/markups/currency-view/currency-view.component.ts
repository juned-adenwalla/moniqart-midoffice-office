import { Component } from '@angular/core';
let Config = require('../../../../../../configs/currency.config.js');

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css']
})
export class CurrencyViewComponent {
  config = Config.config;
}
