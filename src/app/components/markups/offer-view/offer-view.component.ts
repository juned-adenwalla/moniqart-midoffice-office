import { Component } from '@angular/core';
let Config = require('../../../../../../configs/coupon.config.js');

@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css']
})
export class OfferViewComponent {
  config = Config.config;
}
