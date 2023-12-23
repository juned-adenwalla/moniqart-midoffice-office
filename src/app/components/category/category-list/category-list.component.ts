import { Component } from '@angular/core';
let Config = require('../../../../../../configs/categories.config.js');

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  config = Config.config;
}
