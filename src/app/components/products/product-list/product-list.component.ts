import { Component } from '@angular/core';
let Config = require('../../../../../../configs/products.config.js');

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  config:any = Config.config;
}
