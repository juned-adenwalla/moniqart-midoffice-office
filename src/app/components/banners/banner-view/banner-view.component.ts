import { Component } from '@angular/core';
let Config = require('../../../../../../configs/banner.config.js');

@Component({
  selector: 'app-banner-view',
  templateUrl: './banner-view.component.html',
  styleUrls: ['./banner-view.component.css']
})
export class BannerViewComponent {
  config:any = Config.config;
}
