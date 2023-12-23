import { Component } from '@angular/core';
let Config = require('../../../../../../configs/news.config.js');

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent {
  config = Config.config;
}
