import { Component } from '@angular/core';
let Config = require('../../../../../../configs/reviews.config.js');

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {
  config:any = Config.config;
}
