import { Component } from '@angular/core';
let Config = require('../../../../../../configs/subscription.config.js');

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent {
  config = Config.config;
}
