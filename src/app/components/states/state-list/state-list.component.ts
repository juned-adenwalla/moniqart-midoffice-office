import { Component } from '@angular/core';
let Config = require('../../../../../../configs/state.config.js');

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent {
  config = Config.config;
}
