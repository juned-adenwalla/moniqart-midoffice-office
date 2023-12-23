import { Component } from '@angular/core';
let CurrencyConfig = require('../../../../../../configs/currency.config.js');
let FeeConfig = require('../../../../../../configs/fee.config.js');
let CouponConfig = require('../../../../../../configs/coupon.config.js');
let CountryConfig = require('../../../../../../configs/country.config.js');
let StateConfig = require('../../../../../../configs/state.config.js');
let NewsConfig = require('../../../../../../configs/news.config.js');

@Component({
  selector: 'app-markup-list',
  templateUrl: './markup-list.component.html',
  styleUrls: ['./markup-list.component.css']
})
export class MarkupListComponent {
  view: any='currency';
  currency_config = CurrencyConfig.config;
  fee_config = FeeConfig.config;
  offer_config = CouponConfig.config;
  country_config = CountryConfig.config;
  state_config = StateConfig.config;
  news_config = NewsConfig.config;
  changeTab(tab:any){
    this.view = tab;
  }
}
