import { Component } from '@angular/core';
let Config = require('../../../../../../configs/banner.config.js');

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent {
  config:any = Config.config;
}
