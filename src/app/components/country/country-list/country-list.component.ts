import { Component } from '@angular/core';
let Config = require('../../../../../../configs/country.config.js');

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  config = Config.config;
}
