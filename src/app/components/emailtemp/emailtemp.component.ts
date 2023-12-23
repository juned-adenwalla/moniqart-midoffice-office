import { Component } from '@angular/core';
let Config = require('../../../../../configs/emailtemplates.config.js');

@Component({
  selector: 'app-emailtemp',
  templateUrl: './emailtemp.component.html',
  styleUrls: ['./emailtemp.component.css']
})
export class EmailtempComponent {
  config = Config.config;
}
