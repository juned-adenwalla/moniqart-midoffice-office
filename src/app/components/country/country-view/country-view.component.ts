import { Component } from '@angular/core';
let Config = require('../../../../../../configs/country.config.js');

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent {
  config = Config.config;
}
