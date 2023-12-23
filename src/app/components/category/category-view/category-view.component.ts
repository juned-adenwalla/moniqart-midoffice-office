import { Component } from '@angular/core';
let Config = require('../../../../../../configs/categories.config.js');

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {
  config = Config.config;
}
