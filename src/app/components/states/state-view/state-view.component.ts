import { Component } from '@angular/core';
let Config = require('../../../../../../configs/state.config.js');

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent {
  config = Config.config;
}
