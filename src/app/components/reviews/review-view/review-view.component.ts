import { Component } from '@angular/core';
let Config = require('../../../../../../configs/reviews.config.js');

@Component({
  selector: 'app-review-view',
  templateUrl: './review-view.component.html',
  styleUrls: ['./review-view.component.css']
})
export class ReviewViewComponent {
  config:any = Config.config;
}
