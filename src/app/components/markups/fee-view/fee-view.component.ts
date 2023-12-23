import { Component } from '@angular/core';
let Config = require('../../../../../../configs/fee.config.js');

@Component({
  selector: 'app-fee-view',
  templateUrl: './fee-view.component.html',
  styleUrls: ['./fee-view.component.css']
})
export class FeeViewComponent {
  config = Config.config;
}
