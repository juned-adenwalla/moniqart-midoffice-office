import { Component } from '@angular/core';
let Config = require('../../../../../../configs/subscription.config.js');

@Component({
  selector: 'app-subscription-view',
  templateUrl: './subscription-view.component.html',
  styleUrls: ['./subscription-view.component.css']
})
export class SubscriptionViewComponent {
  config = Config.config;
}
